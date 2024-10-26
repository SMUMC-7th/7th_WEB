import * as S from './Login.style';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
      .required('이메일을  입력해주세요.'),
    password: yup
      .string()
      .min(8, '비밀번호는 8 ~ 16자 이내로 입력해주세요.')
      .max(16, '비밀번호는 8 ~ 16자 이내로 입력해주세요.')
      .required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    alert('로그인 성공!');
    console.log(data);
    reset({});
  };

  return (
    <S.Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <h2>로그인</h2>
      <S.Section>
        <S.Input
          type="email"
          {...register('email')}
          placeholder="이메일을 입력해주세요!"
        />
        <S.ErrorMsg>{errors.email?.message}</S.ErrorMsg>
      </S.Section>
      <S.Section>
        <S.Input
          type="password"
          {...register('password')}
          placeholder="비밀번호를 입력해주세요!"
        />
        <S.ErrorMsg>{errors.password?.message}</S.ErrorMsg>
      </S.Section>
      <S.LoginBtn type="submit" disabled={!isValid || isSubmitting}>
        로그인
      </S.LoginBtn>
    </S.Form>
  );
};

export default Login;
