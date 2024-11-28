import { usePostSignup } from '../hooks/usepostAuth';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { TAuthBody } from '../type/auth';

function Signup() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('이메일 형식이 올바르지 않습니다.')
      .required('이메일 입력은 필수입니다.'),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@$#]).+$/,
        '비밀번호는 대문자, 소문자, 특수문자(!, @, $, #)를 포함해야 합니다.',
      )
      .required('비밀번호 입력은 필수입니다.'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], '비밀번호와 일치하지 않습니다.')
      .required('비밀번호 한번 더 입력해주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const role = 'user';

  const { mutate, isPending, isError } = usePostSignup();

  const onSubmit = (data: TAuthBody) => {
    mutate({
      email: data.email,
      password: data.password,
      role: role,
    });
  };

  return (
    <form className='pageLayout items-center' onSubmit={handleSubmit(onSubmit)}>
      <div className='w-96 flex flex-col items-center gap-14'>
        <h2 className='text-2xl font-bold'>회원가입</h2>
        <div className='w-full flex flex-col gap-2'>
          <h2>이메일</h2>
          <input
            className='border border-gray-400 h-10 rounded-md pl-2'
            placeholder={'이메일을 입력해주세요.'}
            {...register('email')}
          />
          <p className='text-xs text-red-600'>{errors.email?.message}</p>
          <h2>비밀번호</h2>
          <input
            type='password'
            className='border border-gray-400 h-10 rounded-md pl-2'
            placeholder={'비밀번호를 입력해주세요.'}
            {...register('password')}
          />
          <p className='text-xs text-red-600'>{errors.password?.message}</p>
          <h2>비밀번호 확인</h2>
          <input
            type='password'
            className='border border-gray-400 h-10 rounded-md pl-2'
            placeholder={'비밀번호를 다시 입력해주세요.'}
            {...register('passwordConfirm')}
          />
          <p className='text-xs text-red-600'>{errors.passwordConfirm?.message}</p>
        </div>
        <button className='bg-green-primary w-full h-14 text-white rounded-md' type='submit'>
          회원가입
        </button>
      </div>
    </form>
  );
}

export default Signup;
