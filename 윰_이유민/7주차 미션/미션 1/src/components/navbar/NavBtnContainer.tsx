import * as S from './NavBtnContainer.style';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { axiosInstanceUser } from '../../apis/axios-instance';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface User {
  email: string;
}

const NaveBtnContainer = () => {
  const {
    isLogin,
    setIsLogin,
    accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken,
  } = useContext(LoginContext);

  const getUserData = async () => {
    if (!accessToken) {
      setIsLogin(false);
      return;
    }

    try {
      const { data } = await axiosInstanceUser.get<User>('/user/me');
      setIsLogin(true);
      return data;
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response?.status === 401 &&
        refreshToken
      ) {
        return await refreshAccessToken();
      } else {
        console.log(error instanceof Error ? error.message : '에러 발생');
        setIsLogin(false);
      }
    }
  };

  const refreshAccessToken = async () => {
    try {
      const tokenResponse = await axiosInstanceUser.post(
        `/auth/token/access`,
        [],
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        tokenResponse.data;

      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);

      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);

      axiosInstanceUser.defaults.headers.Authorization = `Bearer ${newAccessToken}`;

      const { data: retryData } = await axiosInstanceUser.get<User>('/user/me');

      setIsLogin(true);
      console.log('토큰 재발급');

      return retryData;
    } catch (error) {
      console.log(error instanceof Error ? error.message : '토큰 재발급 실패');
      setIsLogin(false);
    }
  };

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<User | undefined>({
    queryKey: ['user'],
    queryFn: getUserData,
    enabled: !!accessToken,
  });

  if (!isLogin || isError) {
    return (
      <S.BtnContainer>
        <S.Login to="/login">로그인</S.Login>
        <S.Signup to="/signup">회원가입</S.Signup>
      </S.BtnContainer>
    );
  }

  if (isLoading) {
    return <></>;
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
