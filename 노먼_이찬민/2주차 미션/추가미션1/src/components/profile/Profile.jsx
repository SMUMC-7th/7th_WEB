import React, { useState } from "react";
import * as S from "./profile.style";
import Modal from "../modal/Modal";

const user = {
  name: "chanmin",
  description: "react good",
  image: "/cat.jpg",
};

function Profile() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <S.Container>
      <S.Image src={user.image}></S.Image>
      <S.Name>{user.name}</S.Name>
      <S.Description>{user.description}</S.Description>
      <S.LuckButton onClick={openModal}>오늘의 운세 🍀</S.LuckButton>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </S.Container>
  );
}

export default Profile;
