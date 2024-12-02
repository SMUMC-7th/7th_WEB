import { Link } from 'react-router-dom';
import { IoMdTrendingUp } from 'react-icons/io';
import { IoMdTime } from 'react-icons/io';
import { IoHeartCircle } from 'react-icons/io5';

const PostsNav = () => {
  return (
    <div className='w-full h-16 flex justify-between items-center'>
      <nav className='flex gap-10 text-xl items-center'>
        <div className='flex gap-2 items-center cursor-pointer'>
          <IoMdTrendingUp />
          <p>지금 뜨는</p>
        </div>
        <div className='flex gap-2 items-center cursor-pointer'>
          <IoMdTime />
          <p>최신</p>
        </div>
        <div className='flex gap-2 items-center cursor-pointer'>
          <IoHeartCircle />
          <p>인기</p>
        </div>
      </nav>
      <Link to='/write' className='px-4 py-2 bg-green-primary text-white rounded-md'>
        글 작성
      </Link>
    </div>
  );
};

export { PostsNav };
