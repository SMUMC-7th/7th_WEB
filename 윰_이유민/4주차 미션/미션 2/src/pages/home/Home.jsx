

import * as S from "../movieList/MovieList.style";
import MovieCard from "../../components/movieCard/MovieCard";
import useCustomFetch from "../../hooks/useCustomFetch";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";

const HomePage = () => {
  const {data: movies, isLoading, isError} = useCustomFetch(`/movie/popular?language=ko-kr`);
  
  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <div>에러가 발생했어요!</div>
  }

  return (
    <S.Container>
      {movies.data?.results.map((movie, _) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </S.Container>
  );
};

export default HomePage;
