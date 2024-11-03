import CardListSkeleton from '../movieCard/Skeleton/card-list-skeleton';
import * as S from './loading.style';
const Loading = () => {
    return (
        <S.Container>
            <CardListSkeleton number={20}></CardListSkeleton>;
        </S.Container>
    );
};

export default Loading;
