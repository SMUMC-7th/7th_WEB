import * as S from "./MovieLIst.style.ts";
import MovieCard from "../../components/Moviecard/MovieCard.tsx";
import useCustomFetch from "../../hooks/useCustomFetch.js";
import { TMoviesDTO, FetchResponse } from "../../mocks/movieType.ts";
import CardListSkeleton from "../Moviecard/Skeleton/Card-List-Skeleton.tsx";
const MovieList = ({ category }: { category: string }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<FetchResponse>(`/movie/${category}?language=ko&page=1`);

  if (isLoading) {
    return <CardListSkeleton number={20} />;
  }
  if (isError || !movies) {
    return <S.H1>Error</S.H1>;
  }
  console.log("무비데이터: ", movies);
  return (
    <S.Container>
      {movies.results?.map((movie: TMoviesDTO) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </S.Container>
  );
};

export default MovieList;
