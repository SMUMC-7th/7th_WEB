import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils/validate';
import * as S from './Login.style';

const Login = () => {
  const login = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });

  const { values, errors, touched, getTestInputProps } = login;

  const handlePressLogin = () => {
    console.log(values.email, values.password);
    alert('로그인 성공!');
  };

  return (
    <S.Form noValidate>
      <h2>로그인</h2>
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
      <S.LoginBtn
        type="submit"
        onClick={handlePressLogin}
        disabled={
          (touched.email && errors.email) ||
          (touched.password && errors.password)
        }
      >
        로그인
      </S.LoginBtn>
    </S.Form>
  );
};

export default Login;
