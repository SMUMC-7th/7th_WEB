import * as S from './login.style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Login } from '../../apis/auth';
import { useAuthContext } from '../../context/LogInContext';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

interface LoginForm {
    email: string;
    password: string;
}

const LogIn = () => {
    const navigate = useNavigate();
    const { setIsLogin } = useAuthContext();

    const schema = yup.object().shape({
        email: yup.string().email().required('이메일을 반드시 입력해주세요.'),
        password: yup
            .string()
            .min(8, '비밀번호는 8자 이상이어야 합니다.')
            .max(16, '비밀번호는 16자 이하여야 합니다.')
            .required('비밀번호를 입력해주세요.'),
    });

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
        <S.Container>
            <div>
                <S.Text>로그인</S.Text>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Input
                        type="email"
                        placeholder="이메일을 입력해주세요!"
                        {...register('email')}
                    />
                    <S.Error>{errors.email?.message}</S.Error>

                    <S.Input
                        type="password"
                        placeholder="비밀번호를 입력해주세요!"
                        {...register('password')}
                    />
                    <S.Error>{errors.password?.message}</S.Error>

                    <S.Button type="submit" disabled={!isValid || isPending}>
                        {isPending ? '로딩 중...' : '로그인'}
                    </S.Button>
                </S.Form>
            </div>
        </S.Container>
    );
};

export default LogIn;
