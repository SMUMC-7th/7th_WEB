import * as S from './InfoCardSkeleton.style';

const InfoCardSkeleton = () => {
  return (
    <S.Container>
      <S.PosterContainer>
        <S.DetailContainer>
          <S.TitleBox />
          <S.AvgBox />
          <S.DateBox />
          <S.TimeBox />
          <S.TagLineBox />
          <S.OverviewBox />
        </S.DetailContainer>
      </S.PosterContainer>
    </S.Container>
  );
};

export { InfoCardSkeleton };
