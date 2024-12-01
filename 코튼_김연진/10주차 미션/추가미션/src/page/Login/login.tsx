import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { LogIn } from '../../apis/auth';
import { useAuthContext } from '../../context/LogInContext';
import yupPassword from 'yup-password';
import { TLogin } from '../../type/type';

yupPassword(yup);

// Validation schema
const schema = yup.object().shape({
    email: yup
        .string()
        .email('유효한 이메일 형식을 입력해주세요.')
        .required('이메일을 반드시 입력해주세요.'),
    password: yup
        .string()
        .min(8, '비밀번호는 8자 이상이어야 합니다.')
        .max(16, '비밀번호는 16자 이하여야 합니다.')
        .matches(/\d/, '비밀번호는 숫자를 포함해야 합니다.')
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            '비밀번호는 특수문자를 포함해야 합니다.'
        )
        .test('uppercase', '비밀번호는 대문자를 포함해야 합니다.', (value) =>
            /[A-Z]/.test(value || '')
        )
        .test('lowercase', '비밀번호는 소문자를 포함해야 합니다.', (value) =>
            /[a-z]/.test(value || '')
        )
        .required('비밀번호를 입력해주세요.'),
});

const Login = () => {
    const navigate = useNavigate();
    const { setIsLogin } = useAuthContext();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const { mutate: loginMutation } = useMutation({
        mutationFn: LogIn,
        onSuccess: () => {
            setIsLogin(true);
            navigate('/');
        },
        onError: (error) => {
            console.error('로그인 실패:', error);
            alert('로그인에 실패하였습니다');
        },
    });

    const onSubmit = (data: TLogin) => {
        loginMutation(data);
    };

    return (
        <div className="flex flex-col items-center w-full h-full gap-5 mt-[10%]">
            <h1 className="text-2xl font-semibold">로그인</h1>
            <form
                className="flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="email"
                    id="email"
                    placeholder="이메일을 입력해주세요"
                    className="w-[400px] h-10 pl-4 border border-solid rounded-md"
                    {...register('email')}
                />
                {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                )}

                <input
                    type="password"
                    id="password"
                    placeholder="비밀번호를 입력해주세요"
                    className="w-[400px] h-10 pl-4 border border-solid rounded-md"
                    {...register('password')}
                />
                {errors.password && (
                    <p className="text-red-600">{errors.password.message}</p>
                )}

                <button
                    type="submit"
                    disabled={!isValid}
                    className="h-8 bg-gray-200 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    로그인
                </button>
            </form>
        </div>
    );
};

export default Login;
