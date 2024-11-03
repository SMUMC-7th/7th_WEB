import MovieCard from './../movieCard/MovieCard';
import * as S from './MovieList.style';

const MovieList = ({ movies }) => {
  return (
    <S.Container>
      {movies.data?.results.map((movie, _) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </S.Container>
  );
};

export { MovieList };
