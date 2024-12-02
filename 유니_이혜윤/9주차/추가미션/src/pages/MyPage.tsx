import React, { useEffect, useState } from "react";
import axiosInstance from "../apis/axiosInstance";

interface UserInfo {
  email: string;
  role: string;
}

const MyPage: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axiosInstance
      .get<UserInfo>("/v1/users/me")
      .then((response) => setUserInfo(response.data))
      .catch((err) => {
        setError(err);
      });
  }, []);

  // console.log(userInfo);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userInfo) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex flex-col items-center m-5">
      <h1 className="p-5 font-bold text-[20px]">내 정보</h1>
      <ul>
        <li>이메일 : {userInfo.email}</li>
        <li>역할 : {userInfo.role}</li>
      </ul>
    </div>
  );
};

export default MyPage;
