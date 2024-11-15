import { CardSkeleton } from './CardSkeleton';
import * as S from './CardSkeletonList.style';

interface CardSkeletonListProps {
  number: number;
}

const CardSkeletonList = ({ number }: CardSkeletonListProps) => {
  return (
    <S.Container>
      {new Array(number).fill(0).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </S.Container>
  );
};

export { CardSkeletonList };
