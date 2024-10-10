

import * as S from "../movieList/MovieList.style";
import MovieCard from "../../components/movieCard/MovieCard";
import useCustomFetch from "../../hooks/useCustomFetch";

const HomePage = () => {
  const {data: movies, isLoading, isError} = useCustomFetch(`/movie/popular?language=ko-kr`);
  


  return (
    <S.Container>
      {movies.data?.results.map((movie, _) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </S.Container>
  );
};

export default HomePage;
