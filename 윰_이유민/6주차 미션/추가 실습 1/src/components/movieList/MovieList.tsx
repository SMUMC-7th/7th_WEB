import MovieCard from '../movieCard/MovieCard';
import * as S from './MovieList.style';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

interface Movies {
  results: Movie[];
}

const MovieList = ({ movies }: { movies: Movies }) => {
  return (
    <S.Container>
      {movies.results.map((movie) => {
        console.log(movie);

        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </S.Container>
  );
};

export { MovieList };
