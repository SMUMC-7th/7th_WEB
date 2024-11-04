import * as S from "./SearchPage.style";

const SearchPage = () => {
  return (
    <S.SearchContainer>
      <input type="text" placeholder="영화 제목을 입력해주세요" />
      <button type="submit">검색</button>
    </S.SearchContainer>
  );
};

export default SearchPage;
