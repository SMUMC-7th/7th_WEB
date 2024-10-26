import * as S from './login.style';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const LogIn = () => {
    const schema = z.object({
        email: z
            .string()
            .email({ message: '이메일 형태를 확인해주세요' })
            .min(1, { message: '이메일은 필수 입력 요소입니다.' }),
        password: z
            .string()
            .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
            .max(16, { message: '비밀번호는 16자 이하이어야 합니다.' }),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: zodResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
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
