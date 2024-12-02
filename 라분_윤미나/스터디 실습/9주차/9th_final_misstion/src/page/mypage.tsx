import { useQuery } from "@tanstack/react-query";
import { GetUserInfo } from "../hook/blog";
import { FaUserCircle } from "react-icons/fa";

const MyPage = () => {
  const {
    data: infos,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => GetUserInfo(),
    queryKey: ["UserInfo"],
  });

  console.log("mypage 정보 : ", infos);
  if (isPending) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }
  return (
    <div className="flex flex-col items-center gap-10 w-1000 min-h-[800px]">
      <h1 className="text-25">상세페이지</h1>
      <div className="w-full h-full flex flex-col  items-center gap-4 py-5 px-3 border-[1px] border-gray-400 rounded-md">
        <div className="flex justify-center items-center gap-5 rounded-lg shadow-md w-300 py-5 px-8">
          <FaUserCircle className="w-100 h-100" />
          <div>
            <p>id : {infos.id}</p>
            <p>email : {infos.email}</p>
            <p>role : {infos.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
