import { Link } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isLogin, userName, setUserName, accessToken, handleLogout } =
    useAuthContext();

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const [searchParams] = useSearchParams({
    mq: "",
  });

  const mq = searchParams.get("mq");

  const handleSearchMovie = () => {
    if (mq === searchValue) return;
    navigate(`/search?mq=${searchValue}`);
  };

  const handleSearchMovieWithKeyboard = (
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleSearchMovie();
    }
  };

  const userInfo = (accessToken: string) => {
    axios
      .get("http://localhost:3000/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const email = response.data.email;
        const nickname = email.split("@")[0];
        setUserName(nickname);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  };
  if (accessToken) {
    userInfo(accessToken);
  }

  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-6">
        <Link to={"/"} style={{ color: "rgb(255, 0, 119)" }}>
          <h1>YONGCHA</h1>
        </Link>
        <Link to={"/category"}>
          <h2 className="text-white">영화</h2>
        </Link>
      </div>

      <div className="flex items-center gap-5 my-0 mx-16">
        <div>
          <input
            className="w-200 h-25 bg-zinc-800 rounded-lg text-13 text-white"
            placeholder="  영화 제목을 입력해주세요"
            value={searchValue}
            onChange={onChangeSearchValue}
            onKeyDown={handleSearchMovieWithKeyboard}
          />
        </div>

        {isLogin ? (
          <>
            <span className="text-white">{userName}님 반갑습니다.</span>
            <button
              onClick={() => {
                handleLogout();
                setUserName(null);
              }}
            >
              <span className="text-white">로그아웃</span>
            </button>
          </>
        ) : (
          <>
            <button className="w-90 h-40 border-none hover:bg-[rgb(255, 0, 119)] rounded-lg">
              <Link to={"/login"}>
                <span className="text-white text-base">로그인</span>
              </Link>
            </button>

            <button>
              <Link to={"/signup"}>
                <span className="text-white text-base">회원가입</span>
              </Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
