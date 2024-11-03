import * as S from './signup.style';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const SignUp = () => {
    const zodSignUp = z
        .object({
            email: z
                .string()
                .min(1, { message: '이메일은 필수 입력 요소입니다.' })
                .email({ message: '이메일 형태를 확인해주세요' }),
            password: z
                .string()
                .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
                .max(16, { message: '비밀번호는 16자 이하여야 합니다.' }),
            passwordConfirm: z
                .string()
                .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
                .max(16, { message: '비밀번호는 16자 이하여야 합니다.' }),
            gender: z
                .string()
                .min(1, { message: '성별은 필수 입력 요소입니다.' }),
            birthYear: z
                .string()
                .min(1, { message: '출생연도는 필수 입력 요소입니다.' })
                .regex(/^\d{4}$/, { message: '올바른 연도를 입력해주세요' }),
            birthMonth: z
                .string()
                .min(1, { message: '출생월은 필수 입력 요소입니다.' }),
            birthDay: z
                .string()
                .min(1, { message: '출생일은 필수 입력 요소입니다.' }),
        })
        .refine((data) => data.password === data.passwordConfirm, {
            message: '비밀번호가 일치하지 않습니다.',
            path: ['passwordConfirm'],
        });

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm({
        resolver: zodResolver(zodSignUp),
        defaultValues: {
            email: '',
            password: '',
            passwordConfirm: '',
            gender: '',
            birthYear: '',
            birthMonth: '',
            birthDay: '',
        },
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출', data);
    };
    const selectedGender = watch('gender');

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
                    {...register('passwordConfirm')}
                />
                {errors.passwordConfirm?.message && (
                    <S.Error>{errors.passwordConfirm?.message}</S.Error>
                )}

                <S.RadioDiv>
                    <S.Gender checked={selectedGender === 'male'}>
                        <S.Radio
                            type="radio"
                            id="male"
                            value="male"
                            {...register('gender')}
                        />
                        <S.Label htmlFor="male">남성</S.Label>
                    </S.Gender>
                    <S.Gender checked={selectedGender === 'female'}>
                        <S.Radio
                            type="radio"
                            id="female"
                            value="female"
                            {...register('gender')}
                        />
                        <S.Label htmlFor="female">여성</S.Label>
                    </S.Gender>
                </S.RadioDiv>
                {errors.gender?.message && (
                    <S.Error>{errors.gender?.message}</S.Error>
                )}

                <S.Birth>
                    <S.BirthInput
                        type="text"
                        placeholder="년(4자)"
                        {...register('birthYear')}
                    />
                    <S.Select {...register('birthMonth')}>
                        <option value="">월</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}월
                            </option>
                        ))}
                    </S.Select>
                    <S.Select {...register('birthDay')}>
                        <option value="">일</option>
                        {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}일
                            </option>
                        ))}
                    </S.Select>
                </S.Birth>
                {errors.birthYear?.message && (
                    <S.Error>{errors.birthYear?.message}</S.Error>
                )}
                {errors.birthMonth?.message && (
                    <S.Error>{errors.birthMonth?.message}</S.Error>
                )}
                {errors.birthDay?.message && (
                    <S.Error>{errors.birthDay?.message}</S.Error>
                )}
                <S.Button type="submit" disabled={!isValid}>
                    회원가입
                </S.Button>
            </S.Form>
        </S.Container>
    );
};

export default SignUp;
