import CardSkeleton from './card-skeleton';
interface Props {
    number: number;
}
const CardListSkeleton = ({ number }: Props) => {
    return new Array(number).fill(0).map((_) => <CardSkeleton />);
};
export default CardListSkeleton;
