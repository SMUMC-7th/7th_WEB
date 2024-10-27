import useForm from '../../hooks/useForm.js';
import { validateSignup } from '../../utils/validate.js';
import * as S from './Signup.style.js';

const Signup = () => {
  const signup = useForm({
    initialValue: {
      email: '',
      password: '',
      passwordCheck: '',
    },
    validate: validateSignup,
  });

  const { values, errors, touched, getTestInputProps } = signup;

  const handlePressSignup = () => {
    alert('회원가입 성공!');
    console.log(values.email, values.password, values.passwordCheck);
  };

  return (
    <S.Form noValidate>
      <h2>회원가입</h2>
      <S.Section>
        <S.Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...getTestInputProps('email')}
          error={touched.email && errors.email}
        />
        {touched.email && errors.email && (
          <S.ErrorMsg>{errors.email}</S.ErrorMsg>
        )}
      </S.Section>
      <S.Section>
        <S.Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...getTestInputProps('password')}
          error={touched.password && errors.password}
        />
        {touched.password && errors.password && (
          <S.ErrorMsg>{errors.password}</S.ErrorMsg>
        )}
      </S.Section>
      <S.Section>
        <S.Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요!"
          {...getTestInputProps('passwordCheck')}
          error={touched.passwordCheck && errors.passwordCheck}
        />
        {touched.passwordCheck && errors.passwordCheck && (
          <S.ErrorMsg>{errors.passwordCheck}</S.ErrorMsg>
        )}
      </S.Section>
      <S.SignupBtn
        type="submit"
        onClick={handlePressSignup}
        disabled={
          (touched.email && errors.email) ||
          (touched.password && errors.password) ||
          (touched.passwordCheck && errors.passwordCheck)
        }
      >
        제출
      </S.SignupBtn>
    </S.Form>
  );
};

export default Signup;
