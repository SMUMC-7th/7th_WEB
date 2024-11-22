import CardListSkeleton from '../movieCard/Skeleton/card-list-skeleton';

const Loading = () => {
    return (
        <div className="flex m-[20px] w-full mt-[40px] justify-center">
            <CardListSkeleton number={20}></CardListSkeleton>
        </div>
    );
};

export default Loading;
