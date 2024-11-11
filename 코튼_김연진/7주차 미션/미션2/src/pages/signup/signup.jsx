import * as S from './signup.style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const SignUp = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required('이메일을 반드시 입력해주세요.'),
        password: yup
            .string()
            .min(8, '비밀번호는 8자 이상이어야 합니다.')
            .max(16, '비밀번호는 16자 이하여야 합니다.')
            .required('비밀번호를 입력해주세요.'),
        passwordCheck: yup
            .string()
            .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
            .required('비밀번호 검증 또한 필수 입력 요소입니다.'),
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
            await axios.post('http://localhost:3000/auth/register', data);
            window.location.replace('/login');
        } catch (error) {
            console.error('Error signup:', error);
        }
    };

    return (
        <S.Container>
            <S.Text>회원가입</S.Text>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Input
                    type="email"
                    placeholder="이메일을 입력해주세요!"
                    {...register('email')}
                />
                {errors.email?.message && (
                    <S.Error>{errors.email?.message}</S.Error>
                )}

                <S.Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요!"
                    {...register('password')}
                />
                {errors.password?.message && (
                    <S.Error>{errors.password?.message}</S.Error>
                )}
                <S.Input
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요!"
                    {...register('passwordCheck')}
                />
                {errors.passwordCheck?.message && (
                    <S.Error>{errors.passwordCheck?.message}</S.Error>
                )}

                <S.Button type="submit" disabled={!isValid}>
                    회원가입
                </S.Button>
            </S.Form>
        </S.Container>
    );
};

export default SignUp;
