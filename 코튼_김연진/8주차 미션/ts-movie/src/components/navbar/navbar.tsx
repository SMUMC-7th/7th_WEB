import * as S from './navbar.style';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../context/LogInContext';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import useGetMyInfo from '../../hooks/queries/useGetMyInfo';

interface UserData {
    email: string;
    id: string;
}

const Navbar = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const { isLogin, setIsLogin } = useAuthContext();
    const accessToken = localStorage.getItem('accessToken');
    const [isClicked, setIsClicked] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const mq = searchParams.get('mq') || '';
    const location = useLocation();

    useEffect(() => {
        setIsClicked(location.pathname === '/category');
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname !== '/search') {
            setSearchValue('');
        }
    }, [location]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchValue.trim()) {
                setSearchParams({ mq: searchValue });
                navigate(`/search?mq=${searchValue}`);
            }
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [searchValue, navigate, setSearchParams]);

    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`);
    };

    const handleSearchMovieWithKeyboard = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === 'Enter') {
            handleSearchMovie();
        }
    };

    const { data, refetch } = useGetMyInfo(accessToken);

    useEffect(() => {
        if (isLogin) {
            refetch();
        }
    }, [isLogin, refetch]);

    useEffect(() => {
        if (data) {
            setUserData({ email: data.email, id: data.id });
        }
    }, [data, isLogin]);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsLogin(false);
        window.location.reload();
    };

    const handleLogout = () => {
        logout();
        localStorage.removeItem('isLogin');
    };

    return (
        <S.Nav>
            <S.StyledLink to={'/'}>CATFLIX</S.StyledLink>
            <S.Buttons1>
                <S.NavButton to={'/category'} isClicked={isClicked}>
                    카테고리
                </S.NavButton>
            </S.Buttons1>
            <S.Buttons2>
                <S.StyledLink2 to={'/search'}>
                    <FaSearch
                        style={{
                            color: '#7b7d84',
                            position: 'absolute',
                            left: '10px',
                            zIndex: '1',
                        }}
                    />
                    <S.SearchBox
                        placeholder="영화 제목을 입력해주세요..."
                        value={searchValue}
                        onChange={onChangeSearchValue}
                        onKeyDown={handleSearchMovieWithKeyboard}
                    ></S.SearchBox>
                </S.StyledLink2>

                {userData ? (
                    <>
                        <S.Text>
                            {userData.email.split('@')[0]}님 반갑습니다.
                        </S.Text>
                        <S.Button2 onClick={handleLogout}>로그아웃</S.Button2>
                    </>
                ) : (
                    <>
                        <S.Button1 to={'/login'} signup={'false'}>
                            로그인
                        </S.Button1>
                        <S.Button1 to={'/signup'} signup={'true'}>
                            회원가입
                        </S.Button1>
                    </>
                )}
            </S.Buttons2>
        </S.Nav>
    );
};

export default Navbar;
