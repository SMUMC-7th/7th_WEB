import CardSkeleton from "./Card-Skeleton";
import * as S from "./Card-List-Skeleton.style";

const CardListSkeleton = ({ number }: { number: number }) => {
  return (
    <S.MovieContainer>
      {new Array(number).fill(0).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </S.MovieContainer>
  );
};

export default CardListSkeleton;
