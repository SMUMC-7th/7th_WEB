import { useParams } from 'react-router-dom';
import { TMovieCategory } from '../types/movie';
import { UseGetInfiniteMovieList } from '../hooks/useGetInfiniteMovieData';
import { MovieCard } from '../components/MovieCard';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { DataNotFound } from '../components/NotFound';
import Lottie from 'react-lottie-player';
import loadingAnimation from '../assets/lottie/loadingAnimation.json';

function CategoryMovieList() {
  const { category } = useParams();
  const categoryType = category as TMovieCategory;

  const {
    data: movies,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isPending,
    isError,
  } = UseGetInfiniteMovieList(categoryType);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isPending) {
    return <div></div>;
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

export default CategoryMovieList;
