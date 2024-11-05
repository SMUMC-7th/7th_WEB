import * as S from './login.style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Login } from '../../apis/auth';

const LogIn = () => {
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
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (data) => {
        console.log('폼 데이터 제출', data);
        try {
            const { accessToken, refreshToken } = await Login(data);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('accessToken', accessToken);

            console.log('로그인 성공');
            window.location.replace('/');
        } catch (error) {
            console.error('Error Login:', error);
        }
    };

    return (
        <S.Container>
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

                <S.Button type="submit" disabled={!isValid}>
                    로그인
                </S.Button>
            </S.Form>
        </S.Container>
    );
};

export default LogIn;
