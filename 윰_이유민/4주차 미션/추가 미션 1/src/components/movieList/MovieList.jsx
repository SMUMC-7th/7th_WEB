import useFetchData from "../../hooks/useFetchData"
import { MovieCard } from "../movieCard/MovieCard";
import * as S from "./MovieList.style"

function MovieList() {
  // 영화 목록 (popular) 불러오기
  const {data: movies, isLoading, isError} = useFetchData(`/movie/popular?language=ko&page=1`)

  if (isLoading) {
    return <div>로딩 중..</div>
  }

  if (isError) {
    return <div>에러 발생ㅡ..ㅡ</div>
  }

  return (
    <S.Container>
      <h2>Movies</h2>
      <S.MovieList>
        {movies.data?.results.slice(0,20).map((movie, _) =>
        )}
      </S.MovieList>
    </S.Container>
  )
}

export { MovieList }