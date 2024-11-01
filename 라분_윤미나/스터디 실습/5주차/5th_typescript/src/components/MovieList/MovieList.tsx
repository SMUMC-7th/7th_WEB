import * as S from "./MovieLIst.style.ts";
import MovieCard from "../../components/Moviecard/MovieCard.tsx";
import useCustomFetch from "../../hooks/useCustomFetch.js";
import { TMoviesDTO } from "../../mocks/movieType.ts";

interface IMoviesDataType {
  results: TMoviesDTO[];
}

const MovieList = ({ category }: { category: string }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<IMoviesDataType>(`/movie/${category}?language=ko&page=1`);

  if (isLoading) {
    return <S.H1>로딩중...</S.H1>;
  }
  if (isError) {
    return <S.H1>Error</S.H1>;
  }
  //console.log("무비데이터: ", movies);
  return (
    <S.Container>
      {movies.data?.results?.map((movie: TMoviesDTO) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </S.Container>
  );
};

export default MovieList;
