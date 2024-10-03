import React, { useState } from "react";
import * as S from "./MovieList.style";
import { MOVIES } from "../../mocks/movies";
import MovieCard from "../movieCard/MovieCard";

function MovieList() {
  console.log(MOVIES);
  const [isHover, setIsHover] = useState(0);
  return (
    <S.Container>
      {MOVIES.results.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            {...movie}
            isHover={isHover}
            setIsHover={setIsHover}
          />
        );
      })}
    </S.Container>
  );
}

export default MovieList;
