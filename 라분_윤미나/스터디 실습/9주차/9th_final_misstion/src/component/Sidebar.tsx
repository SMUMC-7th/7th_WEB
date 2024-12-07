import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const { userName, myPostNumber } = useAuthContext();

  return (
    <nav className="my-20 py-6 px-3 min-w-[190px] flex flex-col items-center gap-6 border-t-[2px]  border-gray-900">
      <Link to="/">UMC 블로그</Link>

      {userName ? (
        <div className="w-full py-5 px-3 flex flex-col items-center gap-6 border-[1px] rounded-md">
          <FaUserCircle className="w-60 h-60" />
          <h1>{userName}님</h1>
          <div>
            <div className="flex gap-5">
              <Link to="/mypost">내가 쓴 게시글</Link>
              <p>{myPostNumber}</p>
            </div>
          </div>
          <Link to="/write" className="py-1 px-3 bg-pink-200 rounded-md">
            글쓰기
          </Link>
        </div>
      ) : (
        <>
          <Link to="/login" className="py-1 px-3 bg-pink-200 rounded-md">
            블로그 로그인하기
          </Link>
        </>
      )}
    </nav>
  );
};
export default Sidebar;
