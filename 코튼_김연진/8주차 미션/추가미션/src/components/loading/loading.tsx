import CardListSkeleton from '../movieCard/Skeleton/card-list-skeleton';

const Loading = () => {
    return (
        <div className="flex m-[20px] w-full justify-center flex-wrap gap-[20px]">
            <CardListSkeleton number={20}></CardListSkeleton>
        </div>
    );
};

export default Loading;
