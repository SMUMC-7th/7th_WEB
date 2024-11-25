import Lottie from 'react-lottie-player';
import errorAnimation from '../assets/lottie/errorAnimation.json';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <Lottie loop animationData={errorAnimation} play className='w-28 h-28' />
      <h2>페이지를 찾을 수 없습니다.</h2>
      <Link to='/' className='text-gray-400'>
        홈으로 돌아가기
      </Link>
    </div>
  );
};

const DataNotFound = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <Lottie loop animationData={errorAnimation} play className='w-28 h-28' />
      <h2>새로고침 후 다시 시도해주세요.</h2>
    </div>
  );
};

export { PageNotFound, DataNotFound };
