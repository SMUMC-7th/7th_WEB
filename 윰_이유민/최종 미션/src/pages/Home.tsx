import { useInView } from 'react-intersection-observer';
import { PostCard } from '../components/PostCard';
import { PostsNav } from '../components/PostsNav';
import { useGetPostList } from '../hooks/useGetPost';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import loadingAnimation from '../assets/lottie/loadingAnimation.json';
import errorAnimation from '../assets/lottie/errorAnimation.json';
import { TPostNav, TPostOrderQuery } from '../type/post';

function Home() {
  const [isSelected, setIsSelected] = useState<TPostNav>('now_trending');

  const orderByConfig: Record<TPostNav, TPostOrderQuery[]> = {
    now_trending: ['likeCount_DESC', 'id_DESC'],
    recent: ['id_DESC'],
    popular: ['likeCount_DESC'],
  };

  const {
    data: posts,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isPending,
    isError,
  } = useGetPostList({
    order: orderByConfig[isSelected],
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isPending) {
    return <Lottie loop animationData={loadingAnimation} play className='w-32 h-32' />;
  }

  if (isError) {
    <Lottie loop animationData={errorAnimation} play className='w-32 h-32' />;
  }

  return (
    <div className='pageLayout items-center gap-4'>
      <PostsNav isSelected={isSelected} setIsSelected={setIsSelected} />
      <div className='w-full grid grid-cols-3 gap-8'>
        {posts?.pages?.map((page) =>
          page.data?.data?.map((post) => <PostCard key={post.id} {...post} />),
        )}
      </div>
      <div ref={ref} className='w-full mt-12 flex justify-center items-center'>
        {isFetching && <Lottie loop animationData={loadingAnimation} play className='w-32 h-32' />}
      </div>
    </div>
  );
}

export default Home;
