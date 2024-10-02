import React from "react";
import * as S from "./Sidebar.style";
import Profile from "./../profile/Profile";
import Navbar from "../navbar/Navbar";

function Sidebar() {
  return (
    <S.Container>
      <Profile></Profile>
      <Navbar></Navbar>
    </S.Container>
  );
}

export default Sidebar;
