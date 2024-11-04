import * as S from './navbar.style';
import fetchUserData from '../../hooks/fetchUserData';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUserData(); // 유저 데이터 가져오기
                setUserData(data); // 상태에 데이터 저장
            } catch {
                setUserData(null);
            }
        };

        fetchData();
    }, []);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.log('로그아웃');
        window.location.reload(); // 페이지를 새로고침하여 로그아웃 반영
    };

    const handleLogout = () => {
        logout(); // 로그아웃 함수 호출
    };

    return (
        <S.Nav>
            <S.StyledLink to={'/'}>CATFLIX</S.StyledLink>
            <S.Buttons>
                {userData ? (
                    <>
                        <S.Text>
                            {userData.email.split('@')[0]}님 반갑습니다.
                        </S.Text>
                        <S.Button2 onClick={handleLogout}>로그아웃</S.Button2>
                    </>
                ) : (
                    <>
                        <S.Button1 to={'/login'}>로그인</S.Button1>
                        <S.Button1 to={'/signup'} signup="true">
                            회원가입
                        </S.Button1>
                    </>
                )}
            </S.Buttons>
        </S.Nav>
    );
};

export default Navbar;
