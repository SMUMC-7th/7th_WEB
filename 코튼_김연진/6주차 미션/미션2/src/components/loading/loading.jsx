import CardListSkeleton from '../movieCard/Skeleton/card-list-skeleton';
import * as S from './loading.style';
const Loading = () => {
    return (
        <S.Container>
            <S.MovieCardList>
                <CardListSkeleton number={20}></CardListSkeleton>
            </S.MovieCardList>
        </S.Container>
    );
};

export default Loading;
