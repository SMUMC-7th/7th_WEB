import * as S from './navbar.style';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMyInfo } from '../../apis/user';

const Navbar = () => {
    const [userData, setUserData] = useState(null);
    const accessToken = localStorage.getItem('accessToken');
    const { data } = useQuery({
        queryKey: ['myInfo'],
        queryFn: () => {
            if (accessToken) {
                return getMyInfo({ accessToken });
            }
            return null;
        },
        enabled: !!accessToken,
    });

    useEffect(() => {
        if (data) {
            setUserData({ email: data.email, id: data.id });
        }
    }, [data]);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.log('로그아웃');
        window.location.reload();
    };

    const handleLogout = () => {
        logout();
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
                        <S.Button1 to={'/login'} signup={false}>
                            로그인
                        </S.Button1>
                        <S.Button1 to={'/signup'} signup={true}>
                            회원가입
                        </S.Button1>
                    </>
                )}
            </S.Buttons>
        </S.Nav>
    );
};

export default Navbar;
