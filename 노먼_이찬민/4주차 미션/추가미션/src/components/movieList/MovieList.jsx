import React, { useEffect, useState } from "react";
import * as S from "./MovieList.style";
// import { MOVIES } from "../../mocks/movies";
import MovieCard from "../movieCard/MovieCard";
import { getMovies } from "../../../entities/movies/getMoives";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";

function MovieList(props) {
  // 각 카테고리 페이지에서 받아온 props로 api 호출 및 movies 상태 관리
  const { category } = props;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // getMoives 함수를 호출하여 받은 api 결과를 state로 관리하기 위해서 한 번 더 async 적용
    async function setMoviesState() {
      setIsLoading(true);
      try {
        const apiMovies = await getMovies(category);
        setMovies(apiMovies);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
    }

    // 만든 함수 호출
    setMoviesState();
  }, [category]); // 카테고리 변경될 때마다 위 로직 재실행

  const [isHover, setIsHover] = useState(0);
  return (
    <S.Container>
      {/* api로 movies 상태를 업데이트하기 전에 렌더링 되는것을 방지하기 위해 movies && 를 사용 */}
      {/* 만약 movies가 [] (false) 라면 아래 렌더링 코드는 실행되지 못함 */}
      {movies &&
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              {...movie} // movie 내의 속성들을 다 분리해서 넘겨줌
              isHover={isHover}
              setIsHover={setIsHover}
            />
          );
        })}
      {isError && <div>죄송합니다. 불러오는 중 오류가 발생했습니다.</div>}
      {isLoading && <LoadingSpinner />}
    </S.Container>
  );
}

export default MovieList;
