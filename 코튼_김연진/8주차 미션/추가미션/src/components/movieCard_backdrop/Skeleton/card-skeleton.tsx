const CardSkeleton = () => {
    return (
        <div className="flex flex-col justify-start">
            <div className="w-[270px] h-[140px] bg-[rgb(230,230, 230)] rounded-[10px] overflow-hidden animate-skeleton"></div>
        </div>
    );
};

export default CardSkeleton;
