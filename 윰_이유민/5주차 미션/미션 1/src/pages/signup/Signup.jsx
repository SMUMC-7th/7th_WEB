import { SIGNUP_FORM, USERSEX } from '../../constants/menu.js';
import useForm from '../../hooks/useForm.js';
import { validateSignup } from '../../utils/validate.js';
import * as S from './Signup.style.js';

const Signup = () => {
  const signup = useForm({
    initialValue: {
      email: '',
      password: '',
      passwordCheck: '',
      birthDate: '',
      userSex: '',
    },
    validate: validateSignup,
  });

  const { values, errors, touched, getTestInputProps } = signup;

  const isFormValid = () => {
    return (
      !errors.email &&
      !errors.password &&
      !errors.passwordCheck &&
      !errors.userSex
    );
  };

  const handlePressSignup = () => {
    alert('회원가입 성공!');
    console.log(
      values.email,
      values.password,
      values.passwordCheck,
      values.birthDate,
      values.userSex
    );
  };

  return (
    <S.Form noValidate onSubmit={handlePressSignup}>
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
      <S.Section>
        <S.Title>성별</S.Title>
        <S.RadioContainer>
          {USERSEX.map((option) => (
            <S.Radio key={option.id}>
              <input
                type="radio"
                {...getTestInputProps('userSex')}
                id={option.id}
                value={option.value}
                name="userSex"
              />
              <S.Label htmlFor={option.id}>{option.label}</S.Label>
            </S.Radio>
          ))}
        </S.RadioContainer>
        {touched.userSex && errors.userSex && (
          <S.ErrorMsg>{errors.userSex}</S.ErrorMsg>
        )}
      </S.Section>
      <S.SignupBtn type="submit" disabled={!isFormValid()}>
        제출
      </S.SignupBtn>
    </S.Form>
  );
};

export default Signup;
