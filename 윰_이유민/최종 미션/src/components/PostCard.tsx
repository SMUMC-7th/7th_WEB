import { TPost } from '../type/post';
import defaultPostImage from '../assets/images/defaultPostImage.jpg';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ id, title, imageUrl, content, createdAt, likeCount, dislikeCount }: TPost) => {
  const navigate = useNavigate();
  const date = createdAt.split('T')[0];
  const time = createdAt.split('T')[1].slice(0, 5);

  return (
    <div
      className='bg-white flex flex-col overflow-hidden hover:brightness-50 cursor-pointer'
      onClick={() => navigate(`/posts/${id}`)}
    >
      <img
        src={imageUrl ? `${import.meta.env.VITE_API_IMG_URL}/${imageUrl}` : defaultPostImage}
        alt=''
        className='w-full h-52 object-cover'
      />
      <div className='flex flex-col gap-6 px-4 py-2 border-b border-gray-300'>
        <h2 className='w-72 text-lg font-bold truncate'>{title}</h2>
        <p className='w-full h-12 line-clamp-2 text-ellipsis'>{content}</p>
        <div className='flex gap-2'>
          <p className='text-gray-500 text-xs font-light'>{date}</p>
          <p className='text-gray-500 text-xs font-light'>{time}</p>
        </div>
      </div>
      <div className='flex gap-3 text-gray-600 px-4 py-2'>
        <div className='flex gap-1 items-center'>
          <AiFillLike />
          <p>{likeCount}</p>
        </div>
        <div className='flex gap-1 items-center'>
          <AiFillDislike />
          <p>{dislikeCount}</p>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
