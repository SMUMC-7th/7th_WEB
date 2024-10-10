import React from "react";
import * as S from "./MainPage.style";
import Sidebar from "./../../components/sidebar/Sidebar";
import MovieList from "./../../components/movieList/MovieList";

function MainPage() {
  return (
    <S.Container>
      <MovieList category={"now_playing"} />
    </S.Container>
  );
}

export default MainPage;
