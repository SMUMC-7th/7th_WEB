import { useInView } from 'react-intersection-observer';
import { UseGetInfiniteMovieReview } from '../../hooks/useGetInfiniteMovieData';
import { useEffect } from 'react';
import Lottie from 'react-lottie-player';
import loadingAnimation from '../../assets/lottie/loadingAnimation.json';
import { LoadingSpinner } from '../loadingSpinner';
import { DataNotFound } from '../NotFound';

const MovieReview = ({ id }: { id: number }) => {
  const {
    data: reviews,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isPending,
    isError,
  } = UseGetInfiniteMovieReview(id);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  const defaultProfile =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <DataNotFound />;
  }

  return (
    <div className='w-full flex flex-col gap-4'>
      <h2 className='text-xl'>리뷰</h2>
      <div className='flex flex-col gap-4'>
        {reviews?.pages?.map((page) =>
          page.results?.flat()?.map((review) => (
            <div key={review.id} className='flex flex-col gap-2'>
              <div className='flex gap-3 items-center'>
                <img
                  src={
                    review.author_details?.avatar_path
                      ? `https://image.tmdb.org/t/p/w500/${review?.author_details.avatar_path}`
                      : defaultProfile
                  }
                  alt=''
                  className='w-10 h-10 rounded-full object-cover'
                />
                <p>{review.author_details?.username}</p>
                <p className='text-sm text-gray-400'>
                  {review.author_details?.rating ? `평점 ${review?.author_details?.rating}` : ''}
                </p>
                <p className='text-sm text-gray-400'>{review?.updated_at?.split('T')[0]}</p>
              </div>
              <div className='text-gray-300 text-sm'>{review?.content}</div>
            </div>
          )),
        )}
      </div>
      <div ref={ref} className='w-full mt-12 flex justify-center items-center'>
        {isFetching && <Lottie loop animationData={loadingAnimation} play className='w-32 h-32' />}
      </div>
    </div>
  );
};

export { MovieReview };
