import { useParams } from 'react-router-dom';
import { MovieCredits } from './MovieCredits';
import { MovieReview } from './MovieReview';
import { useState } from 'react';
import { SimilarMovies } from './SimilarMovies';

const MovieInfo = () => {
  const { movieId } = useParams();
  const id = movieId as unknown as number;
  const [isTab, setIsTab] = useState<'movieInfo' | 'similarMovies'>('movieInfo');

  return (
    <div className='w-full py-4 px-24 flex flex-col gap-8 justify-center items-center'>
      <nav className='flex gap-4 text-lg'>
        <button
          className={`${isTab === 'movieInfo' ? 'border-b-2' : ''}`}
          onClick={() => setIsTab('movieInfo')}
        >
          영화 정보
        </button>
        <button
          className={`${isTab === 'similarMovies' ? 'border-b-2' : ''}`}
          onClick={() => setIsTab('similarMovies')}
        >
          관련 영화
        </button>
      </nav>
      {isTab === 'movieInfo' ? (
        <div className='w-full flex flex-col gap-6'>
          <MovieCredits id={id} />
          <MovieReview id={id} />
        </div>
      ) : (
        <SimilarMovies id={id} />
      )}
    </div>
  );
};

export { MovieInfo };
