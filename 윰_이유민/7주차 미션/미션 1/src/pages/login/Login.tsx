import { LOGIN_FORM } from '../../constants/menu';
import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils/validate';
import axios, { AxiosError } from 'axios';
import * as S from './Login.style';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setIsLogin } = useContext(LoginContext);
  const navigate = useNavigate();

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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        data
      );
      const { accessToken, refreshToken } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      setIsLogin(true);
      navigate('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && error.response.status === 400) {
          alert('이메일 또는 비밀번호를 확인하세요.');
        } else {
          console.log(error.message);
        }
      } else {
        console.log(error);
      }
    }
  };

  return (
    <S.Form noValidate onSubmit={handleLogin}>
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
      <S.LoginBtn type="submit" disabled={!isFormValid()}>
        로그인
      </S.LoginBtn>
    </S.Form>
  );
};

export default Login;
