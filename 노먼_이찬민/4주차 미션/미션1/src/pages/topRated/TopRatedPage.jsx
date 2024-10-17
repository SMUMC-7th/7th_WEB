import React from "react";
import { authInstance } from "../../api/axiosInstance";
import * as S from "../main/MainPage.style";
import MovieList from "../../components/movieList/MovieList";

function TopRatedPage() {
  return (
    <S.Container>
      <MovieList category={"top_rated"}></MovieList>
    </S.Container>
  );
}

export default TopRatedPage;
