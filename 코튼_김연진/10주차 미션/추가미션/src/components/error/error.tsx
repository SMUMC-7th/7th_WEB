const Error = () => {
    return (
        <div className="flex justify-center items-center w-full h-[100vh] flex-col gap-[20px]">
            <div>유저 데이터를 불러오는 데에 에러가 발생하였습니다.</div>
            <button
                onClick={() => (window.location.href = '/')}
                className="pl-[15px] pr-[15px] bg-slate-400 rounded-[30px] pt-[5px] pb-[5px] text-white"
            >
                홈 화면으로 돌아가기
            </button>
        </div>
    );
};

export default Error;
