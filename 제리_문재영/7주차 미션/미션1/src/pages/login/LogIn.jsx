import * as S from './LogIn.styled'
import useForm from '../../hooks/use-form';
import { validateLogin } from "../../utils/validate";


const LogIn = () => {

    const login = useForm({
        initialValue: {
            email: '',
            password: '',
        },
        validate: validateLogin,
    });


    const handlePressLogin = () => {
        console.log(login.values.email, login.values.password);
    }
    return (
        <S.Container>
            <S.Title>로그인</S.Title>
            <S.Input
                error = {login.touched.email && login.errors.email}
                type={'email'}
                placeholder={'이메일을 입력해주세요'}
                {...login.getTextInputProps('email')}
            />
            {login.touched.email && login.errors.email && <S.Error>{login.errors.email}</S.Error>}
            <S.Input
                error = {login.touched.password && login.errors.password}
                type={'password'}
                placeholder={'비밀번호를 입력해주세요'}
                {...login.getTextInputProps('password')}
            />
            {login.touched.password && login.errors.password && <S.Error>{login.errors.password}</S.Error>}
            <S.Button onClick={handlePressLogin}>로그인</S.Button>

        </S.Container>

    )
    
}
export default LogIn;