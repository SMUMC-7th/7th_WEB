import * as S from './login.style';
import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils/validate';
import { useState } from 'react';
import { useEffect } from 'react';
const LogIn = () => {
    const [isValid, setIsValid] = useState(false);
    const login = useForm({
        initialValue: {
            email: '',
            password: '',
        },
        validate: validateLogin,
    });

    const handlePressLogin = () => {
        console.log(login.values.email, login.values.password);
    };

    useEffect(() => {
        // login.errors가 업데이트될 때마다 isValid 상태 설정
        if (!login.errors.email && !login.errors.password) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [login.errors]);
    console.log(login.errors.email);
    return (
        <S.Container>
            <S.Text>로그인</S.Text>
            <S.Input
                type="email"
                placeholder="이메일을 입력해주세요!"
                {...login.getTextInputProps('email')}
            ></S.Input>
            {login.touched.email && login.errors.email && (
                <S.Error>{login.errors.email}</S.Error>
            )}
            <S.Input
                type="password"
                placeholder="비밀번호를 입력해주세요!"
                {...login.getTextInputProps('password')}
            ></S.Input>
            {login.touched.password && login.errors.password && (
                <S.Error>{login.errors.password}</S.Error>
            )}
            <S.Button
                type="submit"
                onClick={handlePressLogin}
                disabled={isValid}
            >
                로그인
            </S.Button>
        </S.Container>
    );
};

export default LogIn;
