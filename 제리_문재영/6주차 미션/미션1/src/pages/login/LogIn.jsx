import * as S from './LogIn.styled'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import useForm from '../../hooks/use-form';
import { validateLogin } from "../../utils/validate";


const LogIn = () => {

    const login = useForm({
        initialValue: {
            email: '',
            password: '',
        },
        validate: validateLogin()
    })

    console.log(login.values, login.errors, login.touched);
    
    // const schema = yup.object().shape({
    //     email: yup.string().email().required('이메일을 반드시 입력해주세요'),
    //     password: yup.string().min(8,'비밀번호는 8자 이상이어야 합니다').max(16,'비밀번호는 16자 이하여야 합니다').required(),
    // })

    // const {register, handleSubmit, formState: {errors}} = useForm({
    //     resolver: yupResolver(schema)
    // });

    // const onSubmit = (data) => {
    //     console.log('onSubmit',data);
    // }

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
                error = {login.touched.email && login.errors.email}
                type={'password'}
                placeholder={'비밀번호를 입력해주세요'}
                {...login.getTextInputProps('password')}
            />
            <S.Button onClick={handlePressLogin}>로그인</S.Button>

        </S.Container>

    )
    
}
export default LogIn;