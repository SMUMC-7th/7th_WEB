import React, { useEffect, useState } from "react";
import { authInstance } from "../../api/axiosInstance";
import * as S from "../main/MainPage.style";
import MovieList from "../../components/movieList/MovieList";
import useMovies from "../../hooks/useMovies";

function NowPlayingPage() {
  const { movies, isLoading, isError } = useMovies("now_playing");
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

export default NowPlayingPage;
