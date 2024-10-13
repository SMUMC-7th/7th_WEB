import useFetchData from "../../hooks/useFetchData"
import { MovieCard } from "../movieCard/MovieCard";
import * as S from "./MovieList.style"

function MovieList() {

  const {data: movies, isLoading, isError} = useFetchData(`/3/movie/popular?language=ko&page=1`)

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
        {movies.data?.results.map((movie, _) =>
          <MovieCard key={movie.id} {...movie} />
        )}
      </S.MovieList>
    </S.Container>
  )
}

export { MovieList }