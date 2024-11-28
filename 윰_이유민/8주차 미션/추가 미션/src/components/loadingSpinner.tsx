import Lottie from 'react-lottie-player';
import loadingAnimation from '../assets/lottie/loadingAnimation.json';

const LoadingSpinner = () => {
  return (
    <div className='w-screen flex items-center justify-center'>
      <Lottie loop animationData={loadingAnimation} play className='w-28 h-28' />
    </div>
  );
};

export { LoadingSpinner };
