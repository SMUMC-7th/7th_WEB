import * as S from './signup.style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Signup } from '../../apis/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface SignupForm {
    email: string;
    password: string;
    passwordCheck: string;
}
const SignUp = () => {
    const navigate = useNavigate();
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
                    {isPending ? '로딩 중...' : '회원가입'}
                </S.Button>
            </S.Form>
        </S.Container>
    );
};

export default SignUp;
