import * as S from './LogIn.styled'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'


const LogIn = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required('이메일을 반드시 입력해주세요'),
        password: yup.string().min(8,'비밀번호는 8자 이상이어야 합니다').max(16,'비밀번호는 16자 이하여야 합니다').required(),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('onSubmit',data);
    }

    return (
        <S.Container>
            <S.Title>로그인</S.Title>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Input type='email' {...register('email')}
                placeholder='이메일을 입력해주세요'></S.Input>
                <S.Error>{errors.email?.message}</S.Error>

                <S.Input type='password' {...register('password')}
                placeholder='비밀번호를 입력해주세요'></S.Input>
                <S.Error>{errors.password?.message}</S.Error>

                {/* <S.Input type='submit'>로그인</S.Input> */}
            </S.Form>
        </S.Container>

    )
    
}
export default LogIn;