import React, { useEffect, useState } from "react";
import * as S from "./MovieList.style";
import { authInstance } from "./../../api/axiosInstance";
import MovieCard from "../movieCard/MovieCard";
import useData from "../../hooks/useData";

function MovieList(props) {
  const { type, movies, myMovies, handleClickCard, handleClickMyCard } = props;
  console.log(type, myMovies, movies, handleClickMyCard);

  return (
    <S.Container>
      {type !== "mine" &&
        movies.length > 0 &&
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              {...movie} // movie 내의 속성들을 다 분리해서 넘겨줌
              movie={movie}
              handleClickCard={handleClickCard}
            />
          );
        })}
      {type === "mine" && <div>위 영화를 눌러서 추가해보세요!</div>}
      {type === "mine" &&
        myMovies.length > 0 &&
        myMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            myMovies={myMovies}
            handleClickMyCard={handleClickMyCard}
            movie={movie}
          />
        ))}
    </S.Container>
  );
}

export default MovieList;
