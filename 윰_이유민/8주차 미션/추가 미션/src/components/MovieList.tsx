import { TMovieListResponse } from '../types/movie';
import { MovieCard } from './MovieCard';

const MovieList = ({ movies }: { movies: TMovieListResponse }) => {
  return (
    <div className='w-full h-screen grid grid-cols-movies gap-2'>
      {movies.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export { MovieList };
