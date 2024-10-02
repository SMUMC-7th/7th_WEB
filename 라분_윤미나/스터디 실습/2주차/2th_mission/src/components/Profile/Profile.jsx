import React, { useState } from 'react';
import Container from './ProFile.style';
import Modal from '../Modal/Modal';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMTBfMjYx%2FMDAxNjY1NDA3NDM0ODc5.Eibl9gObaflKxzhtjZAIvM6KjV88i0UaX8rvQDr-CNwg.LNVQTZgArR2VC-9aArEIW_2pX7DIa5bs33AE2QabkaQg.PNG.ikik45%2F2EAE02ED-240B-44C5-B043-CAB57745764B.jpg&type=sc960_832" />
      <h3>윤미나</h3>
      <p>로제 러버</p>

      <button onClick={handleOpenModal}>오늘의 운세</button>

      {isModalOpen && <Modal onClose={handleCloseModal}></Modal>}
    </Container>
  );
};

export default Profile;
