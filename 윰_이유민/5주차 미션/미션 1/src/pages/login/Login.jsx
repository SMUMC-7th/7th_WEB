import { LOGIN_FORM } from '../../constants/menu';
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

  const isFormValid = () => {
    return !errors.email && !errors.password;
  };

  const handlePressLogin = () => {
    console.log(values.email, values.password);
    alert('로그인 성공!');
  };

  return (
    <S.Form noValidate>
      <h2>로그인</h2>
      {LOGIN_FORM.map((field) => (
        <S.Section key={field.id}>
          <S.Title>{field.title}</S.Title>
          <S.Input
            type={field.type}
            placeholder={field.placeholder}
            {...getTestInputProps(field.name)}
            error={touched[field.name] && errors[field.name]}
          />
          {touched[field.name] && errors[field.name] && (
            <S.ErrorMsg>{errors[field.name]}</S.ErrorMsg>
          )}
        </S.Section>
      ))}
      <S.LoginBtn
        type="submit"
        onClick={handlePressLogin}
        disabled={!isFormValid()}
      >
        로그인
      </S.LoginBtn>
    </S.Form>
  );
};

export default Login;
