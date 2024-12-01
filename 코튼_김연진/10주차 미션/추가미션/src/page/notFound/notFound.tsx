import Lottie from 'react-lottie-player';
import error from '../../lottie/error.json';
const NotFound = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center flex-col bg-slate-500 overflow-hidden">
            <Lottie
                loop
                animationData={error}
                play
                className="w-[80%]"
            ></Lottie>
            <button
                className="bg-white rounded-[30px] pl-[15px] pr-[15px] pt-[5px] pb-[5px] absolute bottom-[70px]"
                onClick={() => (window.location.href = '/')}
            >
                홈으로 이동
            </button>
        </div>
    );
};

export default NotFound;
