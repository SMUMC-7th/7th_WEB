import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-15 p-5 bg-black text-white">
      <div className="flex items-center gap-5">
        <Link to="/">
          <h1 className="text-2xl text-[#f2085a] font-semibold">YOONCHA</h1>
        </Link>
        <Link to="/category">
          <button className="cursor-pointer text-sm text-[#aaa] hover:text-[#fff]">
            카테고리
          </button>
        </Link>
      </div>
      <div className="flex gap-3">
        <input
          placeholder="검색어를 입력하세요"
          className="rounded-full px-2 text-sm text-black"
        />
        <Link to="/login">
          <button className="bg-[#222222] text-white rounded-lg p-1 text-sm hover:bg-[#e00756]">
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-[#f2085a] text-white rounded-lg p-1 text-sm hover:bg-[#222]">
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
