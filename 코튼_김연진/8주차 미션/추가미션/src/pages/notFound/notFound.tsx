const NotFound = () => {
    return (
        <div className="flex text-white w-full h-screen justify-center items-center flex-col gap-[30px] text-[25px]">
            잘못 들어오셨어요 ㅠㅠ
            <button
                className="bg-[#ff139d] rounded-[20px] w-[100px] h-[30px] text-[16px]"
                onClick={() => (location.href = '/')}
            >
                홈으로 이동
            </button>
        </div>
    );
};

export default NotFound;
