import { Link } from 'react-router-dom';
import { TMovie } from '../../types/movie';

const TrendingMovieCard = ({ movie }: { movie: TMovie }) => {
  const posterPath = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

  return (
    <Link
      to={`/movies/${movie.id}`}
      className='relative w-full h-28 rounded-md overflow-hidden cursor-pointer'
    >
      <>
        <img
          className='absolute w-full h-full object-cover hover:brightness-50 peer'
          src={posterPath}
          alt=''
        />
        <div className='absolute h-full invisible peer-hover:visible flex flex-col justify-end p-2'>
          <h4 className='font-bold'>{movie.title}</h4>
          <p className='text-xs'>평균 ★{movie.vote_average}</p>
          <p className='text-xs'>개봉일 {movie.release_date}</p>
        </div>
      </>
    </Link>
  );
};

export { TrendingMovieCard };
