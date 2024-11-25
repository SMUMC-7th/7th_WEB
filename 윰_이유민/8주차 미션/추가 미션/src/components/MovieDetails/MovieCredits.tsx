import { Link } from 'react-router-dom';
import { UseGetMovieCredit } from '../../hooks/useGetData';
import { MovieCreditCard } from './MovieCreditCard';

const MovieCredits = ({ id }: { id: number }) => {
  const { data: credit, isLoading, isError } = UseGetMovieCredit(id);

  return (
    <div className='w-full flex flex-col gap-6'>
      <h2 className='text-xl'>감독 / 출연</h2>
      <div className='w-full flex justify-between'>
        <div className='w-full flex gap-4'>
          {credit?.cast?.slice(0, 5).map((cast) => (
            <MovieCreditCard cast={cast} />
          ))}
        </div>
        <Link to={`/movies/${id}/credits`} className='w-20'>
          더보기
        </Link>
      </div>
    </div>
  );
};

export { MovieCredits };
