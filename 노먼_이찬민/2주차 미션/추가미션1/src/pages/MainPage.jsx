import React, { useState } from "react";
import * as S from "./MainPage.style";
import CardList from "./../components/cardList/CardList";
import Sidebar from "./../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

function MainPage() {
  const [currentCategory, setCurrentCategory] = useState();
  return (
    <S.Container>
      <S.SideBox>
        {/* props drilling... to sidebar -> navbar */}
        <Sidebar setCurrentCategory={setCurrentCategory}></Sidebar>
      </S.SideBox>
      <S.CardsBox>
        <CardList currentCategory={currentCategory} />
      </S.CardsBox>
      <Footer></Footer>
    </S.Container>
  );
}

export default MainPage;
