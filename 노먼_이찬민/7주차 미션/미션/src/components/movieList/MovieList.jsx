import React, { useEffect, useState } from "react";
import * as S from "./MovieList.style";
// import { MOVIES } from "../../mocks/movies";
import MovieCard from "../movieCard/MovieCard";
// import { getMovies } from "../../../entities/movies/getMoives";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import useMovies from "../../hooks/useMovies";
import { useNavigate } from "react-router-dom";

function MovieList(props) {
  // 각 카테고리 페이지에서 받아온 props로 api 호출 및 movies 상태 관리
  const { movies, isError, isLoading } = props;
  // const { movies, isLoading, isError } = useMovies(category);

  return (
    <S.Container>
      {/* api로 movies 상태를 업데이트하기 전에 렌더링 되는것을 방지하기 위해 movies && 를 사용 */}
      {/* 만약 movies가 [] (false) 라면 아래 렌더링 코드는 실행되지 못함 */}
      {movies &&
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie} // movie 내의 속성들을 다 분리해서 넘겨줌
            />
          );
        })}
      {isError && <div>죄송합니다. 불러오는 중 오류가 발생했습니다.</div>}
      {isLoading && <LoadingSpinner />}
    </S.Container>
  );
}

export default MovieList;
