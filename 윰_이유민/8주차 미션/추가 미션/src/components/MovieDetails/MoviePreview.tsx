import { useParams } from 'react-router-dom';
import { useGetMoviePreview } from '../../hooks/useGetData';
import { DataNotFound } from '../NotFound';
import { LoadingSpinner } from '../loadingSpinner';

const MoviePreview = () => {
  const { movieId } = useParams();
  const id = movieId as unknown as number;

  const { data: movie, isLoading, isError } = useGetMoviePreview(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <DataNotFound />;
  }

  return (
    <div className='relative w-full h-72  py-4 px-24 flex rounded-md overflow-hidden'>
      <div className='w-full flex justify-end bg-gradient-to-r from-black to-transparent'>
        <img
          className='w-1/2 absolute object-cover'
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt=''
        />
      </div>
      <div className='absolute w-full h-full bg-gradient-to-r from-black to-transparent'>
        <div className='w-96 h-full pb-6 flex flex-col gap-2 justify-end '>
          <h2 className='text-lg'>{movie?.title}</h2>
          <div className=' flex gap-2 text-sm text-gray-400 '>
            <p>평균 {movie?.vote_average}</p>
            <p>·</p>
            <p>{movie?.release_date.split('-')[0]}</p>
            <p>·</p>
            <p>{movie?.runtime}분</p>
            <p>·</p>
            <p>{movie?.genres[0].name}</p>
            <p>·</p>
            <p>{movie?.origin_country[0]}</p>
          </div>
          <p className='w-full text-sm text-gray-400'>{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export { MoviePreview };
