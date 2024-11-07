import * as S from './Signup.style.js';
import { SIGNUP_FORM } from '../../constants/menu.js';
import useForm from '../../hooks/useForm.js';
import { validateSignup } from '../../utils/validate.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  const signup = useForm({
    initialValue: {
      email: '',
      password: '',
      passwordCheck: '',
    },
    validate: validateSignup,
  });

  const { values, errors, touched, getTestInputProps } = signup;

  const isFormValid = () => {
    return !errors.email && !errors.password && !errors.passwordCheck;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const data = {
      email: values.email,
      password: values.password,
      passwordCheck: values.passwordCheck,
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, data);
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <S.Form noValidate onSubmit={handleSignup}>
      <h2>회원가입</h2>
      {SIGNUP_FORM.map((field) => (
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

      <S.SignupBtn type="submit" disabled={!isFormValid()}>
        제출
      </S.SignupBtn>
    </S.Form>
  );
};

export default Signup;
