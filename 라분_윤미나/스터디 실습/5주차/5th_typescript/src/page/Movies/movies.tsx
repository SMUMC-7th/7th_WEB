import MovieCard from "../../components/Moviecard/MovieCard";
import { Container } from "../../components/MovieList/MovieLIst.style";
import useCustomFetch from "../../hooks/useCustomFetch";
import * as S from "./movies.style";
import { TMoviesDTO } from "../../mocks/movieType.ts";

interface IMoviesDataType {
  results: TMoviesDTO[];
}

const MoviesPage = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<IMoviesDataType>(`/movie/popular?language=ko&page=1`);

  if (isLoading) {
    return <S.H1>로딩중...</S.H1>;
  }
  if (isError) {
    return <S.H1>Error</S.H1>;
  }

  return (
    <Container>
      {movies.data?.results.map((movie: TMoviesDTO) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Container>
  );
};

export default MoviesPage;
