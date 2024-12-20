import { useSearchParams } from 'react-router-dom';
import { useGetInfiniteSearchMovieList } from '../hooks/useGetInfiniteMovieData';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { DataNotFound } from '../components/NotFound';
import { MovieCard } from '../components/MovieCard';
import Lottie from 'react-lottie-player';
import loadingAnimation from '../assets/lottie/loadingAnimation.json';
import { LoadingSpinner } from '../components/loadingSpinner';

function SearchMovies() {
  const [searchParams] = useSearchParams();
  const mq = searchParams.get('mq') || '';

  const {
    data: movies,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isPending,
    isError,
  } = useGetInfiniteSearchMovieList(mq);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <DataNotFound />;
  }

  return (
    <div className='py-4 px-24 flex flex-col'>
      <div className='w-full grid grid-cols-movies gap-4'>
        {movies?.pages?.map((page) =>
          page.results?.flat()?.map((movie) => <MovieCard key={movie.id} movie={movie} />),
        )}
      </div>
      <div ref={ref} className='w-full mt-12 flex justify-center items-center'>
        {isFetching && <Lottie loop animationData={loadingAnimation} play className='w-32 h-32' />}
      </div>
    </div>
  );
}

export default SearchMovies;
