import CardSkeleton from "./card-skeleton";

const CardListSkeleton = ({num}) => {
    return(
        new Array(num).fill(0).map((_,idx) => <CardSkeleton/>)
    )
}

export default CardListSkeleton;