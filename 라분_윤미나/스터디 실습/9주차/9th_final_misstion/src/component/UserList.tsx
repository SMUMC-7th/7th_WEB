import { useQuery } from "@tanstack/react-query";
import { GetUserList } from "../hook/blog";
import { TUserInfoResponse } from "../type/Type";
import { FaUserCircle } from "react-icons/fa";

const UserList = () => {
  const {
    data: users,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => GetUserList(),
    queryKey: ["users"],
  });
  if (isPending) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }
  return (
    <div className="flex flex-col items-center gap-10 w-1000 min-h-[800px]">
      <h1 className="text-25">가입된 유저 목록</h1>
      <div className="w-full h-full flex flex-wrap-reverse justify-center items-center gap-4 py-5 px-3 border-[1px] border-gray-400 rounded-md">
        {users.map((user: TUserInfoResponse) => {
          return (
            <div className="flex items-center gap-5 rounded-lg shadow-md w-400 py-5 px-8">
              <FaUserCircle className="w-80 h-80" />
              <div>
                <p>id : {user.id}</p>
                <p>email : {user.email}</p>
                <p>role : {user.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
