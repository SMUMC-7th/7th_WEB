import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Login } from '../../apis/auth';
import { useAuthContext } from '../../context/LogInContext';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import cn from 'classnames';

interface LoginForm {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().email().required('이메일을 반드시 입력해주세요.'),
    password: yup
        .string()
        .min(8, '비밀번호는 8자 이상이어야 합니다.')
        .max(16, '비밀번호는 16자 이하여야 합니다.')
        .required('비밀번호를 입력해주세요.'),
});

const LogIn = () => {
    const navigate = useNavigate();
    const { setIsLogin } = useAuthContext();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginForm>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const { mutate: loginMutation, isPending } = useMutation({
        mutationFn: Login,
        onSuccess: (data) => {
            const { accessToken, refreshToken } = data;
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('accessToken', accessToken);
            setIsLogin(true);
            console.log('로그인 성공');
            navigate('/');
        },
        onError: (error) => {
            console.error('로그인 실패:', error);
        },
    });

    const onSubmit = (data: LoginForm) => {
        loginMutation(data);
    };

    return (
        <div className="flex flex-col w-full items-center justify-center gap-[10px] mt-[150px]">
            <div>
                <div className="text-white m-[10px] text-[25px] text-center">
                    로그인
                </div>
                <form
                    className="flex gap-[10px] flex-col"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        className="w-[280px] h-[40px] rounded-[5px] border-none pl-[7px]"
                        type="email"
                        placeholder="이메일을 입력해주세요!"
                        {...register('email')}
                    />
                    <div className="text-red-600 text-[15px] ml-[3px]">
                        {errors.email?.message}
                    </div>

                    <input
                        className="w-[280px] h-[40px] rounded-[5px] border-none pl-[7px]"
                        type="password"
                        placeholder="비밀번호를 입력해주세요!"
                        {...register('password')}
                    />
                    <div className="text-red-600 text-[15px] ml-[3px]">
                        {errors.password?.message}
                    </div>

                    <button
                        type="submit"
                        className={cn(
                            'w-full h-10 bg-pink-500 text-white text-sm rounded-3xl transition duration-300',
                            'disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-pink-500 disabled:hover:text-white',
                            'hover:bg-white hover:text-pink-500'
                        )}
                        disabled={!isValid || isPending}
                    >
                        {isPending ? '로딩 중...' : '로그인'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
