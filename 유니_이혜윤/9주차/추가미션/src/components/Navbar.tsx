import { Link } from "react-router-dom";
import { CgPen, CgUser } from "react-icons/cg";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";
import { refreshToken } from "../apis/authApi"; // 리프레시 토큰 함수 가져오기

const logout = async () => {
  const response = await axios.post(
    "http://localhost:3000/v1/auth/logout",
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();

  const mutationLogout = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      alert("로그아웃 되었습니다.");
      setIsLoggedIn(false);
    },
    onError: () => {
      alert("로그아웃에 실패했습니다.");
    },
  });

  const mutationRefresh = useMutation({
    mutationFn: refreshToken,
    onSuccess: () => {
      if (!isLoggedIn) {
        setIsLoggedIn(true);
      }
    },
    onError: () => {
      console.error("리프레시 토큰 실패");
      setIsLoggedIn(false);
    },
  });

  useEffect(() => {
    const checkLoginStatus = () => {
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken="));
      if (accessToken) {
        if (!isLoggedIn) {
          setIsLoggedIn(true); // 로그인 상태로 변경
        }
      } else {
        if (isLoggedIn) {
          setIsLoggedIn(false); // 로그아웃 상태로 변경
        }
      }
    };

    checkLoginStatus();
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken="));

      if (!accessToken) {
        mutationRefresh.mutate(); // 액세스 토큰이 없으면 리프레시 토큰 요청
      }
    }
  }, [isLoggedIn, mutationRefresh]);

  const handleLogout = () => {
    mutationLogout.mutate();
  };

  return (
    <div className="flex justify-between items-center w-full h-[64px] p-[16px] text-black">
      <Link to="/">
        <h1 className="text-[20px] pl-1">velog</h1>
      </Link>
      <div className="flex items-center gap-5">
        <Link to="writepost">
          <CgPen className="text-[20px] cursor-pointer" />
        </Link>
        <CgUser className="text-[20px] cursor-pointer" />

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="w-[86px] h-[32px] flex justify-center items-center bg-[#212529] text-white p-[14px] rounded-3xl text-[16px] cursor-pointer hover:bg-[#363b40]"
          >
            로그아웃
          </button>
        ) : (
          <Link to="/login">
            <button className="w-[73px] h-[32px] flex justify-center items-center bg-[#212529] text-white p-[14px] rounded-3xl text-[16px] cursor-pointer hover:bg-[#363b40]">
              로그인
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
