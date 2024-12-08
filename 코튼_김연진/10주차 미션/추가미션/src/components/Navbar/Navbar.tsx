import { useEffect, useRef, useState } from 'react';
import { useAuthContext } from '../../context/LogInContext';
import { useMutation, useQuery } from '@tanstack/react-query';
import { LogOut, userMe } from '../../apis/auth';
import { IoIosSearch } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';
import img from '../../image/v790-nunny-73.jpg';
import logo from '../../image/logo.svg';
const Navbar = () => {
    const {
        isLogin,
        setIsLogin,
        setUserName,
        userName,
        setRole,
        role,
        setUserId,
    } = useAuthContext();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: userMe,
        enabled: !!isLogin,
    });
    const { mutate: logoutMutation } = useMutation({
        mutationFn: LogOut,
        onSuccess: () => {
            setIsLogin(false);
        },
        onError: (error) => {
            console.error('Error logout:', error);
        },
    });

    const handleLogout = () => {
        logoutMutation();
        setUserName('');
        setRole('');
        setIsLogin(false);
    };

    useEffect(() => {
        if (isLogin) {
            setUserName(user?.email.split('@')[0]);
            setRole(user?.role);
            setUserId(user?.id);
        } else {
            setUserName('');
        }
    }, [isLogin, setRole, setUserName, user, setUserId]);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="min-h-[60px] fixed bg-slate-50 w-full flex pl-[10px] pr-[10px] z-10 flex-col justify-center">
            <div className="flex w-[90%] self-center">
                {isLogin ? (
                    <>
                        <img
                            src={logo}
                            alt="로고 이미지"
                            className="w-[30px] mr-[10px] self-center"
                        />
                        <div
                            className="flex justify-center items-center text-[25px]  font-[700] source-code-pro  hover:cursor-pointer"
                            onClick={() => (window.location.href = '/')}
                        >
                            {userName}.log
                        </div>
                    </>
                ) : (
                    <>
                        <img
                            src={logo}
                            alt="로고 이미지"
                            className="w-[30px] mr-[10px] self-center"
                        />
                        <div
                            className="flex justify-center items-center text-[25px] font-[900] source-code-pro hover:cursor-pointer"
                            onClick={() => (window.location.href = '/')}
                        >
                            Blog
                        </div>
                    </>
                )}

                <div className="flex pl-[10px] items-center ml-auto gap-[10px]">
                    <IoIosSearch
                        size={23}
                        className="flex self-center mr-[10px] hover:cursor-pointer text-gray-700"
                        onClick={() => (window.location.href = '/search')}
                    />

                    {isLogin ? (
                        <div className="flex h-full items-center relative ">
                            <div
                                className="flex items-center group"
                                onClick={toggleMenu}
                            >
                                <img
                                    src={img}
                                    className="rounded-[50%] w-[35px] h-[35px] object-cover"
                                    alt="profile"
                                ></img>
                                <MdArrowDropDown
                                    size={20}
                                    className="group-hover:text-black text-gray-700"
                                />
                            </div>

                            {menuOpen && (
                                <div
                                    ref={menuRef}
                                    className="absolute top-[40px] right-0 bg-white shadow-md rounded-md border border-gray-200 w-[150px] z-10"
                                >
                                    <div
                                        className="p-[10px] hover:bg-gray-100 cursor-pointer"
                                        onClick={() =>
                                            (window.location.href = '/mypage')
                                        }
                                    >
                                        내 프로필
                                    </div>
                                    {role === 'admin' && (
                                        <div
                                            className="flex p-[10px] xs:pl-[10px] hover:cursor-pointer hover:bg-gray-100 "
                                            onClick={() =>
                                                (window.location.href =
                                                    '/admin')
                                            }
                                        >
                                            관리자 페이지
                                        </div>
                                    )}
                                    <button
                                        className="w-full text-left p-[10px] hover:bg-gray-100 cursor-pointer "
                                        onClick={handleLogout}
                                    >
                                        로그아웃
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <a
                                href={'/login'}
                                className="flex p-[3px] xs:pl-[10px] hover:cursor-pointe text-nowrap"
                            >
                                로그인
                            </a>
                            <a
                                href={'/signup'}
                                className="flex p-[3px] xs:pl-[10px] hover:cursor-pointer text-nowrap"
                            >
                                회원가입
                            </a>
                        </>
                    )}
                </div>
            </div>
            <hr className="w-[100vw] bg-slate-50 absolute top-[60px] left-0" />
        </nav>
    );
};

export default Navbar;
