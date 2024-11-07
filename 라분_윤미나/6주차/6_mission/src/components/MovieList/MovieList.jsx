import * as S from "./MovieLIst.style.js";

import MovieCard from "../../components/MovieCard/MovieCard";
import useCustomFetch from "../../hooks/useCustomFetch.js";
import CardListSkeleton from "../../components/MovieCard/Skeleton/Card-List-Skeleton.jsx";

const MovieList = ({ category }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${category}?language=ko&page=1`);

  if (isLoading) {
    return (
      <S.MovieContainer>
        <CardListSkeleton number={20} />;
      </S.MovieContainer>
    );
  }
  if (isError) {
    return (
      <S.TextContainer>
        <h2>에러발생</h2>
      </S.TextContainer>
    );
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
