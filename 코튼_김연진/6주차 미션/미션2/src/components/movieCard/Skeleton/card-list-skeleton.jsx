import CardSkeleton from './card-skeleton';

const CardListSkeleton = ({ number }) => {
    // eslint-disable-next-line react/jsx-key, no-unused-vars
    return new Array(number).fill(0).map((_) => <CardSkeleton />);
};
export default CardListSkeleton;
