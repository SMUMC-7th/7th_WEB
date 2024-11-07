import React from "react";
import * as S from "./MainPage.style";
import Sidebar from "./../../components/sidebar/Sidebar";
import MovieList from "./../../components/movieList/MovieList";
import useMovies from "../../hooks/useMovies";

function MainPage() {
  const { movies, isLoading, isError } = useMovies("now_playing");
  return (
    <S.Container>
      <MovieList movies={movies} isLoading={isLoading} isError={isError} />
    </S.Container>
  );
}

export default MainPage;
