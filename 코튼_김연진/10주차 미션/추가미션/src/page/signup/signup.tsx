import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { SignUp } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { TSignupNoRole } from '../../type/type';
import { AxiosError } from 'axios';
import axios from 'axios';

interface ResponseDataType {
    message: string;
    code: number;
}

const schema = yup.object().shape({
    email: yup.string().email().required('이메일을 반드시 입력해주세요.'),
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

const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<TSignupNoRole>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const { mutate: signupMutation } = useMutation({
        mutationFn: SignUp,
        onSuccess: () => {
            console.log('회원가입 성공');
            navigate('/login');
        },
        onError: (error: AxiosError) => {
            if (axios.isAxiosError<ResponseDataType>(error)) {
                const message = error.response?.data?.message as string;
                if (message) {
                    alert(message);
                } else {
                    alert(
                        '회원가입 중 문제가 발생했습니다. 다시 시도해 주세요.'
                    );
                }
                console.error('Error signup:', error);
            } else {
                alert('예상치 못한 오류가 발생했습니다.');
            }
        },
    });

    const onSubmit = (data: TSignupNoRole) => {
        const submitData = { ...data, role: 'user' };
        signupMutation(submitData);
    };

    return (
        <div className="flex w-full h-full flex-col items-center gap-[20px] mt-[10%]">
            <div className="text-[25px] font-[600]">회원가입</div>
            <form
                action="submit"
                className="flex-col flex gap-[10px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="email"
                    id="email"
                    className="border-solid border-[1px] w-[400px] h-[40px] rounded-[10px] pl-[15px]"
                    placeholder="이메일을 입력해주세요"
                    {...register('email')}
                />
                {errors.email && (
                    <div className="text-red-600">{errors.email.message}</div>
                )}
                <input
                    type="password"
                    id="password"
                    className="border-solid border-[1px] w-[400px] h-[40px] rounded-[10px] pl-[15px]"
                    placeholder="비밀번호를 입력해주세요"
                    {...register('password')}
                />
                {errors.password && (
                    <div className="text-red-600">
                        {errors.password.message}
                    </div>
                )}

                <button
                    className="bg-slate-200 h-[30px] rounded-[10px] disabled:hover:bg-slate-200 disabled:opacity-50 hover:bg-slate-400  hover:cursor-pointer disabled:hover:cursor-not-allowed"
                    disabled={!isValid}
                >
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default Signup;
