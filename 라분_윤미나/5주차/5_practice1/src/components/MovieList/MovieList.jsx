import * as S from "./MovieLIst.style.js";

import MovieCard from "../../components/MovieCard/MovieCard";
import useCustomFetch from "../../hooks/useCustomFetch.js";

const MovieList = ({ category }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${category}?language=ko&page=1`);

  if (isLoading) {
    return <h1 style={{ color: "white" }}>로딩중...</h1>;
  }
  if (isError) {
    return <h1 style={{ color: "white" }}>Error</h1>;
  }

  return (
    <S.Container>
      {movies.data?.results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </S.Container>
  );
};

export default MovieList;
