import * as S from './NavBtnContainer.style';
import axios from 'axios';
import { useState, useEffect } from 'react';

const NaveBtnContainer = () => {
  const [user, setUser] = useState(null);
  const accessToken = localStorage.getItem('accessToken');
  const getUserUrl = `${import.meta.env.VITE_API_URL}/user/me`;

  useEffect(() => {
    const fetchUserData = async () => {
      if (accessToken) {
        try {
          const response = await axios.get(getUserUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    fetchUserData();
  }, [accessToken, getUserUrl]);

  const getUserName = (email) => email.split('@')[0];

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  return (
    <S.BtnContainer>
      {user ? (
        <S.User>{getUserName(user.email)}님 반갑습니다.</S.User>
      ) : (
        <S.Login to="/login">로그인</S.Login>
      )}
      {user ? (
        <S.Logout onClick={handleLogout}>로그아웃</S.Logout>
      ) : (
        <S.Signup to="/signup">회원가입</S.Signup>
      )}
    </S.BtnContainer>
  );
};

export { NaveBtnContainer };
