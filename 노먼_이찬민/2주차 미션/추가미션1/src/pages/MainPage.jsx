import React from "react";
import * as S from "./MainPage.style";
import CardList from "./../components/cardList/CardList";
import Sidebar from "./../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

function MainPage() {
  return (
    <S.Container>
      <S.SideBox>
        <Sidebar></Sidebar>
      </S.SideBox>
      <S.CardsBox>
        <CardList />
      </S.CardsBox>
      <Footer></Footer>
    </S.Container>
  );
}

export default MainPage;
