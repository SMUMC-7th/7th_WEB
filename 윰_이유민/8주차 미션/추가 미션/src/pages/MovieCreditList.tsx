import { useParams } from 'react-router-dom';
import { useGetMovieCredit } from '../hooks/useGetData';
import { MovieCreditCard } from '../components/MovieDetails/MovieCreditCard';
import { LoadingSpinner } from '../components/loadingSpinner';
import { DataNotFound } from '../components/NotFound';

function MovieCreditList() {
  const { movieId } = useParams();
  const id = movieId as unknown as number;

  const { data: credit, isLoading, isError } = useGetMovieCredit(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <DataNotFound />;
  }

  return (
    <div className='w-full py-4 px-24 flex flex-col gap-5'>
      <h2 className='text-lg'>감독 / 출연</h2>
      <div className='w-full grid grid-cols-credits '>
        {credit?.cast?.map((cast) => (
          <MovieCreditCard cast={cast} />
        ))}
        {credit?.crew?.map((crew) => (
          <MovieCreditCard cast={crew} />
        ))}
      </div>
    </div>
  );
}

export default MovieCreditList;
