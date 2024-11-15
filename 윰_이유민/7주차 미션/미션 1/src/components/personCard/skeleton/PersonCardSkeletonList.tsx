import { PersonCardSkeleton } from './PersonCardSkeleton';

interface CardSkeletonListProps {
  number: number;
}

const PersonCardSkeletonList = ({ number }: CardSkeletonListProps) => {
  return new Array(number)
    .fill(0)
    .map((_, idx) => <PersonCardSkeleton key={idx} />);
};

export { PersonCardSkeletonList };
