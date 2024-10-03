import React from "react";
import * as S from "./profile.style";

const user = {
  name: "chanmin",
  description: "react good",
  image: "/cat.jpg",
};

function Profile() {
  return (
    <S.Container>
      <S.Image src={user.image}></S.Image>
      <S.Name>{user.name}</S.Name>
      <S.Description>{user.description}</S.Description>
      <S.LuckButton>오늘의 운세 🍀</S.LuckButton>
    </S.Container>
  );
}

export default Profile;
