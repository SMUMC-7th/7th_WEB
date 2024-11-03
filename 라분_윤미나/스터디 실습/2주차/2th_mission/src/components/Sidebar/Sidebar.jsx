import React from 'react';
import Container from './Sidebar.style';
import Profile from '../profile/profile';
import Navbar from '../Navbar/Navbar';

const Sidebar = () => {
  return (
    <Container>
      <Profile />
      <Navbar />
    </Container>
  );
};

export default Sidebar;
