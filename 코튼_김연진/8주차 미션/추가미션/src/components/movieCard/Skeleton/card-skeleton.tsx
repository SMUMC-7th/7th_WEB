const CardSkeleton = () => {
    return (
        <div className="flex flex-col justify-start">
            <div className="w-[140px] h-[210px] bg-[rgb(230,230,230)] overflow-hidden animate-skeleton"></div>
            <div className="w-[140px] h-[30px] flex flex-col gap-[2px] mt-[5px]">
                <div className="bg-[rgb(230,230,230)] h-[14px] rounded-[5px] animate-skeleton"></div>
                <div className="bg-[rgb(230,230,230)] h-[10px] rounded-[5px] animate-skeleton"></div>
            </div>
        </div>
    );
};

export default CardSkeleton;
