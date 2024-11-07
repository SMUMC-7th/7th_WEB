import MovieCard from "../../components/Moviecard/MovieCard";
import { Container } from "../../components/MovieList/MovieLIst.style";
import useCustomFetch from "../../hooks/useCustomFetch";
import * as S from "./movies.style";
import { TMoviesDTO, FetchResponse } from "../../mocks/movieType.ts";
import CardListSkeleton from "../../components/Moviecard/Skeleton/Card-List-Skeleton.tsx";

const MoviesPage = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<FetchResponse>(`/movie/popular?language=ko&page=1`);

  if (isLoading) {
    return <CardListSkeleton number={20} />;
  }
  if (isError || !movies) {
    return <S.H1>Error</S.H1>;
  }
  console.log("무비데이터: ", movies);
  return (
    <Container>
      {movies?.results?.map((movie: TMoviesDTO) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Container>
  );
};

export default MoviesPage;
