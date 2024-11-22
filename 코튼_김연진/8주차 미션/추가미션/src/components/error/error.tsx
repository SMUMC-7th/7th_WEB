import Lottie from 'react-lottie-player';
import errorJson from '../../lottie/Animation-error.json';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex text-center w-full h-full text-[20px] text-white items-center justify-center flex-col">
            <Lottie loop animationData={errorJson} play />
            <Link
                className="no-underline rounded-[10px] w-[150px] h-[30px] bg-[#ff1e9d] text-white flex justify-center items-center"
                to={'/'}
            >
                홈으로 이동
            </Link>
        </div>
    );
};

export default Error;
