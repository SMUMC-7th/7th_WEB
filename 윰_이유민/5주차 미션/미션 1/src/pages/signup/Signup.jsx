import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './Signup.style.js';

const Signup = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('유효한 이메일 형식이어야 합니다.')
      .required('이메일을 반드시 입력해주세요.'),
    password: yup
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.')
      .required('비밀번호는 필수 입력 요소입니다.'),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 검증 또한 필수 입력 요소입니다.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert('회원가입 성공!');
    console.log(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <h2>회원가입</h2>
      <S.Section>
        <S.Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...register('email')}
          error={errors.email}
        />
        {errors.email && <S.ErrorMsg>{errors.email.message}</S.ErrorMsg>}
      </S.Section>
      <S.Section>
        <S.Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...register('password')}
          error={errors.password}
        />
        {errors.password && <S.ErrorMsg>{errors.password?.message}</S.ErrorMsg>}
      </S.Section>
      <S.Section>
        <S.Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요!"
          {...register('passwordCheck')}
          error={errors.passwordCheck}
        />
        {errors.passwordCheck && (
          <S.ErrorMsg>{errors.passwordCheck?.message}</S.ErrorMsg>
        )}
      </S.Section>
      <S.SignupBtn
        type="submit"
        disabled={errors.email || errors.password || errors.passwordCheck}
      >
        제출
      </S.SignupBtn>
    </S.Form>
  );
};

export default Signup;
