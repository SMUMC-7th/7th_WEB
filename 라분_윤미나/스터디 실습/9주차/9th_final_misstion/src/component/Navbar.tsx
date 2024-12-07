import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useAdminContext } from "../context/AdminContext";
import { GetUserInfo, PostLogout } from "../hook/blog";

const Navbar = () => {
  const { isLogin, setIsLogin, userName, setUserName, setUserId } =
    useAuthContext();
  const { isRole, setIsRole } = useAdminContext();
  const userInfo = () => {
    GetUserInfo()
      .then((response) => {
        //console.log("유저정보 response", response);
        const email = response.email;
        const name = email.split("@")[0];
        setUserName(name);
        setUserId(response.id);
        setIsRole(response.role);
      })
      .catch((error) => {
        console.error("내 정보 가져오기 실패 : ", error);
      });
  };

  const handleLogout = async () => {
    await PostLogout();
    setUserName(null);
    setIsLogin(false);
    setUserId(null);
  };

  userInfo();

  //console.log("유저닉네임 : ", userName);

  return (
    <nav className="flex justify-between px-[15%]">
      <Link to="/">블로그</Link>
      {isLogin ? (
        <div className="flex gap-5">
          <span>{userName}님 반갑습니다.</span>
          {isRole === "admin" ? (
            <>
              <Link to="/admin">유저 목록</Link>
              <Link to="/me">마이페이지</Link>
            </>
          ) : (
            <Link to="/me">마이페이지</Link>
          )}
          <button onClick={handleLogout}>
            <span>로그아웃</span>
          </button>
        </div>
      ) : (
        <div className="flex gap-5">
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
