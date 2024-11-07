import React from "react";
import { authInstance } from "../../api/axiosInstance";
import * as S from "../main/MainPage.style";
import MovieList from "../../components/movieList/MovieList";
import useMovies from "../../hooks/useMovies";

function TopRatedPage() {
  const { movies, isLoading, isError } = useMovies("top_rated");
  return (
    <S.Container>
      <MovieList
        movies={movies}
        isLoading={isLoading}
        isError={isError}
      ></MovieList>
    </S.Container>
  );
}

export default TopRatedPage;
