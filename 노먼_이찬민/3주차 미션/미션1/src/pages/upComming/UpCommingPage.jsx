import React from "react";
import { authInstance } from "../../api/axiosInstance";
import * as S from "../main/MainPage.style";
import MovieList from "../../components/movieList/MovieList";

function UpCommingPage() {
  return (
    <S.Container>
      <MovieList category={"upcoming"}></MovieList>
    </S.Container>
  );
}

export default UpCommingPage;
