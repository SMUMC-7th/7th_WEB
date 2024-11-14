import * as S from './card-skeleton.style';
const CardSkeleton = () => {
    return (
        <S.Container>
            <S.CardMain></S.CardMain>
            <S.TextWrapper>
                <S.TitleBox></S.TitleBox>
                <S.DescriptionBox></S.DescriptionBox>
            </S.TextWrapper>
        </S.Container>
    );
};

export default CardSkeleton;
