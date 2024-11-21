import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Signup } from '../../apis/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

interface SignupForm {
    email: string;
    password: string;
    passwordCheck: string;
}
const schema = yup.object().shape({
    email: yup.string().email().required('이메일을 반드시 입력해주세요.'),
    password: yup
        .string()
        .min(8, '비밀번호는 8자 이상이어야 합니다.')
        .max(16, '비밀번호는 16자 이하여야 합니다.')
        .required('비밀번호를 입력해주세요.'),
    passwordCheck: yup
        .string()
        .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
        .required('비밀번호 검증 또한 필수 입력 요소입니다.'),
});

const SignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const { mutate: signupMutation, isPending } = useMutation({
        mutationFn: Signup,
        onSuccess: () => {
            console.log('회원가입 성공');
            navigate('/login');
        },
        onError: (error) => {
            console.error('Error signup:', error);
        },
    });

    const onSubmit = (data: SignupForm) => {
        signupMutation(data);
    };

    return (
        <div className="flex flex-col w-full mt-[150px] justify-center items-center">
            <div className="text-white m-[10px] text-[25px]">회원가입</div>
            <form
                className="flex flex-col w-[280px] gap-[10px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="max-w-[280px] h-[40px] rounded-[5px] border-none p-0 pl-[5px] box-border"
                    type="email"
                    placeholder="이메일을 입력해주세요!"
                    {...register('email')}
                />
                {errors.email?.message && (
                    <div className="text-red-600 text-[15px] ml-[3px]">
                        {errors.email?.message}
                    </div>
                )}

                <input
                    className="max-w-[280px] h-[40px] rounded-[5px] border-none p-0 pl-[5px] box-border"
                    type="password"
                    placeholder="비밀번호를 입력해주세요!"
                    {...register('password')}
                />
                {errors.password?.message && (
                    <div className="text-red-600 text-[15px] ml-[3px]">
                        {errors.password?.message}
                    </div>
                )}

                <input
                    className="max-w-[280px] h-[40px] rounded-[5px] border-none p-0 pl-[5px] box-border"
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요!"
                    {...register('passwordCheck')}
                />
                {errors.passwordCheck?.message && (
                    <div className="text-red-600 text-[15px] ml-[3px]">
                        {errors.passwordCheck?.message}
                    </div>
                )}

                <button
                    type="submit"
                    className={cn(
                        'w-full h-10 bg-pink-500 text-white text-sm rounded-3xl transition duration-300',
                        'disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-pink-500 disabled:hover:text-white',
                        'hover:bg-white hover:text-pink-500'
                    )}
                    disabled={!isValid || isPending}
                >
                    {isPending ? '로딩 중...' : '회원가입'}
                </button>
            </form>
        </div>
    );
};

export default SignUp;
