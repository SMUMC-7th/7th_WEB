import { useInView } from 'react-intersection-observer';
import { UseGetInfiniteSimilarMovies } from '../../hooks/useGetInfiniteMovieData';
import { useEffect } from 'react';
import { LoadingSpinner } from '../loadingSpinner';
import { DataNotFound } from '../NotFound';
import { MovieCard } from '../MovieCard';
import Lottie from 'react-lottie-player';
import loadingAnimation from '../../assets/lottie/loadingAnimation.json';

const SimilarMovies = ({ id }: { id: number }) => {
  const {
    data: movies,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isPending,
    isError,
  } = UseGetInfiniteSimilarMovies(id);

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
    <div className='w-full flex flex-col'>
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
};

export { SimilarMovies };
