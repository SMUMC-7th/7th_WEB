import { useMutation } from '@tanstack/react-query';
import { postLogin, postSignup } from '../apis/auth';
import { TAuthBody } from '../type/auth';
import { useNavigate } from 'react-router-dom';

function usePostSignup() {
  const navigate = useNavigate();
  const onSignup = () => {
    alert('회원가입이 완료되었습니다.');
    navigate('/login');
  };

  return useMutation({
    mutationFn: (data: TAuthBody) => postSignup(data),
    mutationKey: ['signup'],
    onSuccess: () => onSignup(),
    onError: (error) => console.log('회원가입 에러', error),
  });
}

function usePostLogin() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: TAuthBody) => postLogin(data),
    mutationKey: ['login'],
    onSuccess: () => navigate('/'),
    onError: (error) => console.log('로그인 실패', error.message),
  });
}

export { usePostSignup, usePostLogin };
