import * as S from './NavBtnContainer.style';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { axiosInstanceUser } from '../../apis/axios-instance';
import { useQuery } from '@tanstack/react-query';

interface User {
  email: string;
}

const NaveBtnContainer = () => {
  const { isLogin, setIsLogin } = useContext(LoginContext);

  const accessToken = localStorage.getItem('accessToken');

  const getUserData = async () => {
    if (!accessToken) {
      setIsLogin(false);
    }
    try {
      const { data } = await axiosInstanceUser.get<User>('/user/me');
      setIsLogin(true);
      return data;
    } catch (error) {
      setIsLogin(false);
      if (error instanceof Error) {
        console.log(`${error.message}`);
      }
    }
  };

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<User | undefined>({
    queryKey: ['user'],
    queryFn: getUserData,
  });

  if (isLoading) {
    return <p>...</p>;
  }

  if (isError) {
    return <div>에러가 발생했어요!</div>;
  }

  const getUserName = (email: string) => email.split('@')[0];

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLogin(false);
  };

  return (
    <S.BtnContainer>
      {isLogin && user ? (
        <>
          <S.User>{getUserName(user.email)}님 반갑습니다.</S.User>
          <S.Logout onClick={handleLogout}>로그아웃</S.Logout>
        </>
      ) : (
        <>
          <S.Login to="/login">로그인</S.Login>
          <S.Signup to="/signup">회원가입</S.Signup>
        </>
      )}
    </S.BtnContainer>
  );
};

export { NaveBtnContainer };
