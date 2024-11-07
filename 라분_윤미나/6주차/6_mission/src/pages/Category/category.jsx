import * as S from "./category.style";
import CategoryCardList from "../../components/CCList/CCList";

const CategoryPage = () => {
  return (
    <S.Container>
      <S.H3>카테고리</S.H3>
      <CategoryCardList />
    </S.Container>
  );
};

export default CategoryPage;
