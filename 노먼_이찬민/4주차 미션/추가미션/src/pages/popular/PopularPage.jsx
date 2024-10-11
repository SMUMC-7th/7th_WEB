import React from "react";
import { authInstance } from "../../api/axiosInstance";
import * as S from "../main/MainPage.style";
import MovieList from "../../components/movieList/MovieList";

function PopularPage() {
  return (
    <S.Container>
      <MovieList category={"popular"}></MovieList>
    </S.Container>
  );
}

export default PopularPage;
