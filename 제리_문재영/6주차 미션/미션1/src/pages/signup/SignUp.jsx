import * as S from '../login/LogIn.styled'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const SignUp = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required('이메일을 반드시 입력해주세요'),
        password: yup.string().min(8,'비밀번호는 8자 이상이어야 합니다')
        .max(16,'비밀번호는 16자 이하이어야 합니다')
        .required(),
        passwordCheck: yup.string().required('비밀번호가 일치하지 않습니다').oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
        // confirm_password: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('signup',data);
    }
    return (
        <S.Container>
            <S.Title>회원가입</S.Title>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Input 
                    type='email'
                    placeholder='이메일을 입력해주세요'
                    {...register('email')}>
                </S.Input>
                <S.Error>{errors.email?.message}</S.Error>

                <S.Input 
                    type='password'
                    placeholder='비밀번호를 입력해주세요'
                    {...register('password')}>
                </S.Input>
                <S.Error>{errors.password?.message}</S.Error>

                <S.Input 
                    type='password'
                    placeholder='비밀번호를 한번 더 입력해주세요'
                    {...register('passwordCheck')}>
                </S.Input>
                <S.Error>{errors.passwordCheck?.message}</S.Error>

                <S.Button type='submit'>회원가입</S.Button>
            </S.Form>
        </S.Container>
    )
}
export default SignUp;