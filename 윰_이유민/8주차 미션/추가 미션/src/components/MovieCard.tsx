import { Link } from 'react-router-dom';
import { TMovie } from '../types/movie';

const MovieCard = ({ movie }: { movie: TMovie }) => {
  const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <Link
      to={`/movies/${movie.id}`}
      className='w-full flex flex-col gap-2 hover:brightness-50 rounded-lg overflow-hidden cursor-pointer'
    >
      <img className='h-56 object-cover rounded-lg' src={posterPath} alt='' />
      <div className='flex flex-col'>
        <h3 className='text-sm'>{movie.title}</h3>
        <p className='text-xs'>{movie.release_date}</p>
      </div>
    </Link>
  );
};

export { MovieCard };
