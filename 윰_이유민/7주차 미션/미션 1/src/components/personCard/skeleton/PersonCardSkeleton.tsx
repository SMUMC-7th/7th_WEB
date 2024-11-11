import * as S from './PersonCardSkeleton.style';

const PersonCardSkeleton = () => {
  return (
    <S.Container>
      <S.CardMain />
      <S.NameBox />
      <S.CharacterBox />
    </S.Container>
  );
};

export { PersonCardSkeleton };
