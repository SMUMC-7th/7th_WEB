import * as S from './signup.style';
import useForm from '../../hooks/useForm';
import { validateSignup } from '../../utils/validate';

const SignUp = () => {
    const signup = useForm({
        initialValue: {
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            birthYear: '',
            birthMonth: '',
            birthDay: '',
        },
        validate: validateSignup,
        mode: 'onChange',
    });

    const handlePressSignup = () => {
        console.log(
            '이메일:',
            signup.values.email,
            '비밀번호:',
            signup.values.password,
            '비밀번호 확인:',
            signup.values.confirmPassword,
            '성별:',
            signup.values.gender,
            '출생 연도:',
            signup.values.birthYear,
            '출생 월:',
            signup.values.birthMonth,
            '출생 일:',
            signup.values.birthDay,
        );
    };

    const isFormValid =
        !signup.errors.email &&
        !signup.errors.password &&
        !signup.errors.confirmPassword &&
        !signup.errors.gender &&
        !signup.errors.birthYear &&
        !signup.errors.birthMonth &&
        !signup.errors.birthDay;

    return (
        <S.Container>
            <S.Container2>
                <S.Text>회원가입</S.Text>
                <S.Input
                    type="email"
                    placeholder="이메일을 입력해주세요!"
                    {...signup.getTextInputProps('email')}
                />
                {signup.touched.email && signup.errors.email && (
                    <S.Error>{signup.errors.email}</S.Error>
                )}
                <S.Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요!"
                    {...signup.getTextInputProps('password')}
                />
                {signup.touched.password && signup.errors.password && (
                    <S.Error>{signup.errors.password}</S.Error>
                )}
                <S.Input
                    type="password"
                    placeholder="비밀번호 확인!"
                    {...signup.getTextInputProps('confirmPassword')}
                />
                {signup.touched.confirmPassword &&
                    signup.errors.confirmPassword && (
                        <S.Error>{signup.errors.confirmPassword}</S.Error>
                    )}
                <S.RadioDiv>
                    <S.Gender checked={signup.values.gender === 'male'}>
                        <S.Radio
                            type="radio"
                            id="male"
                            value="male"
                            checked={signup.values.gender === 'male'}
                            onChange={
                                signup.getTextInputProps('gender').onChange
                            }
                        />
                        <S.Label htmlFor="male">남성</S.Label>
                    </S.Gender>
                    <S.Gender checked={signup.values.gender === 'female'}>
                        <S.Radio
                            type="radio"
                            id="female"
                            value="female"
                            checked={signup.values.gender === 'female'}
                            onChange={
                                signup.getTextInputProps('gender').onChange
                            }
                        />
                        <S.Label htmlFor="female">여성</S.Label>
                    </S.Gender>
                </S.RadioDiv>
                {signup.touched.gender && signup.errors.gender && (
                    <S.Error>{signup.errors.gender}</S.Error>
                )}

                <S.Birth>
                    <S.BirthInput
                        type="text"
                        placeholder="년(4자)"
                        {...signup.getTextInputProps('birthYear')}
                    />
                    <S.Select {...signup.getTextInputProps('birthMonth')}>
                        <option value="">월</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}월
                            </option>
                        ))}
                    </S.Select>
                    <S.Select {...signup.getTextInputProps('birthDay')}>
                        <option value="">일</option>
                        {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}일
                            </option>
                        ))}
                    </S.Select>
                </S.Birth>
                {signup.touched.birthYear && signup.errors.birthYear && (
                    <S.Error>{signup.errors.birthYear}</S.Error>
                )}
                {signup.touched.birthMonth && signup.errors.birthMonth && (
                    <S.Error>{signup.errors.birthMonth}</S.Error>
                )}
                {signup.touched.birthDay && signup.errors.birthDay && (
                    <S.Error>{signup.errors.birthDay}</S.Error>
                )}
                <S.Button
                    type="button"
                    onClick={handlePressSignup}
                    disabled={!isFormValid}
                >
                    회원가입
                </S.Button>
            </S.Container2>
        </S.Container>
    );
};

export default SignUp;
