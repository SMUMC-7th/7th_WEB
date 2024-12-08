import ClipLoader from 'react-spinners/ClipLoader';

const Loading = () => {
    return (
        <div className="flex justify-center items-center w-full h-[100vh]">
            <ClipLoader></ClipLoader>
        </div>
    );
};

export default Loading;
