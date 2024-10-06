import React from "react";
import * as S from "./Sidebar.style";
import Profile from "./../profile/Profile";
import Navbar from "../navbar/Navbar";

function Sidebar(props) {
  const { setCurrentCategory } = props;
  return (
    <S.Container>
      <Profile></Profile>
      <Navbar setCurrentCategory={setCurrentCategory}></Navbar>
    </S.Container>
  );
}

export default Sidebar;
