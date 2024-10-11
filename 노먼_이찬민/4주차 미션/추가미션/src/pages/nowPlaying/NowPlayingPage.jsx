import React, { useEffect, useState } from "react";
import { authInstance } from "../../api/axiosInstance";
import * as S from "../main/MainPage.style";
import MovieList from "../../components/movieList/MovieList";

function NowPlayingPage() {
  return (
    <S.Container>
      <MovieList category={"now_playing"}></MovieList>
    </S.Container>
  );
}

export default NowPlayingPage;
