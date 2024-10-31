import * as S from './login.style';
import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils/validate';

const LogIn = () => {
    const login = useForm({
        initialValue: {
            email: '',
            password: '',
        },
        validate: validateLogin,
    });

    const handlePressLogin = () => {
        console.log(
            '이메일:',
            login.values.email,
            '비밀번호:',
            login.values.password,
        );
    };

    const isFormValid = !login.errors.email && !login.errors.password;

    return (
        <S.Container>
            <S.Text>로그인</S.Text>
            <S.Input
                type="email"
                placeholder="이메일을 입력해주세요!"
                {...login.getTextInputProps('email')}
            />
            {login.touched.email && login.errors.email && (
                <S.Error>{login.errors.email}</S.Error>
            )}
            <S.Input
                type="password"
                placeholder="비밀번호를 입력해주세요!"
                {...login.getTextInputProps('password')}
            />
            {login.touched.password && login.errors.password && (
                <S.Error>{login.errors.password}</S.Error>
            )}
            <S.Button
                type="submit"
                onClick={handlePressLogin}
                disabled={!isFormValid}
                isValid={isFormValid}
            >
                로그인
            </S.Button>
        </S.Container>
    );
};

export default LogIn;
