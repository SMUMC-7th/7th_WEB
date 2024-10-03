import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import React from 'react';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
