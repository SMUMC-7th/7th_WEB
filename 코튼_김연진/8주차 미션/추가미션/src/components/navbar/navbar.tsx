import { useEffect, useState } from 'react';
import { useAuthContext } from '../../context/LogInContext';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
        <nav className="flex min-h-[80px] items-center bg-black px-[20px] fixed z-[10000] w-[100%]  mx-auto justify-between">
            <Link
                to="/"
                className="flex max-w-[100px] min-w-[50px] text-[#FF1E9D] text-[1.7rem] font-extrabold mr-[30px] ml-[20px] items-center justify-center"
            >
                CATFLIX
            </Link>
            <div className="flex w-auto">
                <Link
                    to="/category"
                    className={`${
                        isClicked ? 'text-white underline' : 'text-[#9f9f9f]'
                    } text-[19px] flex items-center gap-[10px] justify-center self-center`}
                >
                    카테고리
                </Link>
            </div>
            <div className="flex gap-[10px] ml-auto">
                <Link to="/search" className="flex items-center relative">
                    <FaSearch className="absolute left-[10px] z-[1] text-[#7b7d84]" />
                    <input
                        type="text"
                        className="max-w-[200px] min-w-[150px] h-[30px] pl-[30px] rounded-[10px] bg-[#363636] text-[#7b7d84] font-medium text-[0.8rem] border-none"
                        placeholder="영화 제목을 입력해주세요..."
                        value={searchValue}
                        onChange={onChangeSearchValue}
                        onKeyDown={handleSearchMovieWithKeyboard}
                    />
                </Link>

                {userData ? (
                    <>
                        <div className="text-white text-[15px] flex justify-center items-center h-[30px]">
                            {userData.email.split('@')[0]}님 반갑습니다.
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center w-auto h-[30px] rounded-[5px] border-none bg-black text-white hover:bg-white hover:text-black"
                        >
                            로그아웃
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="flex items-center justify-center w-[70px] h-[30px] rounded-[5px] text-white bg-[#FF1E9D] hover:bg-white hover:text-black"
                        >
                            로그인
                        </Link>
                        <Link
                            to="/signup"
                            className="flex items-center justify-center w-[70px] h-[30px] rounded-[5px] text-white bg-black hover:bg-white hover:text-black"
                        >
                            회원가입
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
