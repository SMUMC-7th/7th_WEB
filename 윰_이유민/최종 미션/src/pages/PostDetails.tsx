import { useParams } from 'react-router-dom';
import { useGetPostDetails, usePostDislike, usePostLike } from '../hooks/useGetPost';
import TuiViewer from '../components/TuiViewer';
import Lottie from 'react-lottie-player';
import loadingAnimation from '../assets/lottie/loadingAnimation.json';
import errorAnimation from '../assets/lottie/errorAnimation.json';
import { BiSolidLike } from 'react-icons/bi';
import { BiSolidDislike } from 'react-icons/bi';
import { useState } from 'react';

function PostDetails() {
  const { postId } = useParams();
  const id = postId as unknown as number;

  const { data: post, isLoading, isError } = useGetPostDetails(id);
  const { mutate: likePost } = usePostLike(id);
  const { mutate: dislikePost } = usePostDislike(id);

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      likePost();
      setIsLiked(true);
      if (isDisliked) setIsDisliked(false);
    }
  };

  const handleDislike = () => {
    if (!isDisliked) {
      dislikePost();
      setIsDisliked(true);
      if (isLiked) setIsLiked(false);
    }
  };

  if (isLoading) {
    <Lottie loop animationData={loadingAnimation} play className='w-32 h-32' />;
  }

  if (isError) {
    <Lottie loop animationData={errorAnimation} play className='w-32 h-32' />;
  }

  return (
    <div className='pageLayoutRow items-center bg-white gap-5 relative'>
      <div className='w-16 h-40 left-8 fixed top-1/4'>
        <div className='w-full h-full rounded-3xl bg-gray-100 flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-col items-center justify-center'>
            <div
              className={`w-10 h-10 flex justify-center items-center rounded-full bg-white border border-gray-200 cursor-pointer hover:border-black ${
                isLiked ? 'text-green-primary' : 'text-gray-500 hover:text-black'
              }`}
              onClick={handleLike}
            >
              <BiSolidLike size={'1.5rem'} className='text-inherit' />
            </div>
            <p>{post?.likeCount}</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div
              className={`w-10 h-10 flex justify-center items-center rounded-full bg-white border border-gray-200 cursor-pointer hover:border-black ${
                isDisliked ? 'text-green-primary' : 'text-gray-500 hover:text-black'
              }`}
              onClick={handleDislike}
            >
              <BiSolidDislike size={'1.5rem'} className='text-inherit' />
            </div>
            <p>{post?.dislikeCount}</p>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex flex-col gap-6'>
        <h2 className='text-3xl font-bold'>{post?.title}</h2>
        <div className='flex gap-2 text-sm'>
          <p className='text-bold'>{post?.author?.email.split('@')[0]}</p>
          <p className='text-gray-500'>·</p>
          <p className='text-gray-500'>{post?.createdAt.split('T')[0]}</p>
        </div>
        <img
          src={`${import.meta.env.VITE_API_IMG_URL}/${post?.imageUrl}`}
          alt={`${post?.title}의 이미지`}
          className='object-cover'
        />
        <TuiViewer content={post?.content} />
      </div>
    </div>
  );
}

export default PostDetails;
