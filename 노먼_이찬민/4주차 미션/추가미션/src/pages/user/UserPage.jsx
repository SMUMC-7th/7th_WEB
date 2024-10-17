import React, { useEffect, useState } from "react";
import { authInstance } from "../../api/axiosInstance";
import * as S from "./UserPage.style";

function UserPage() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUserData() {
      const resApi = await authInstance.get("/me");
      setUser(resApi.data);
    }
    getUserData();
  }, []);

  return (
    <S.Container>
      {user && (
        <S.UserBox>
          <h1>현재 로그인한 유저</h1>
          <div>name: {user.display_name}</div>
          <div>id: {user.id}</div>
        </S.UserBox>
      )}
    </S.Container>
  );
}

export default UserPage;
