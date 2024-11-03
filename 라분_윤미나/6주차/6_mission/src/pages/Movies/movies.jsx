import MovieCard from "../../components/MovieCard/MovieCard";
import { Container } from "../../components/MovieList/MovieLIst.style";
import useCustomFetch from "../../hooks/useCustomFetch";
import CardListSkeleton from "../../components/MovieCard/Skeleton/Card-List-Skeleton.jsx";

import * as S from "./movies.style.js";

const MoviesPage = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/popular?language=ko&page=1`);

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
    <Container>
      {movies.data?.results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Container>
  );
};

export default MoviesPage;
