import * as S from './MovieCategory.style.js';

function MovieCategory() {
  return (
    <S.Container>
      <h3>카테고리</h3>
      <S.CategoryContainer>
        <S.CategoryItem
          img="https://cdn.pixabay.com/photo/2016/06/22/11/10/box-1472804_1280.png"
          to="/movies/now-playing"
        >
          <p>현재 상영중인</p>
        </S.CategoryItem>
        <S.CategoryItem
          img="https://cdn.pixabay.com/photo/2015/08/13/23/47/background-image-887729_1280.jpg"
          to="/movies/popular"
        >
          <p>인기 있는</p>
        </S.CategoryItem>
        <S.CategoryItem
          img="https://cdn.pixabay.com/photo/2015/05/06/03/56/blue-754864_1280.png"
          to="/movies/top-rated"
        >
          <p>높은 평가를 받은</p>
        </S.CategoryItem>
        <S.CategoryItem
          img="https://cdn.pixabay.com/photo/2016/09/13/12/57/skull-1667182_1280.jpg"
          to="/movies/up-coming"
        >
          <p>개봉 예정 중인</p>
        </S.CategoryItem>
      </S.CategoryContainer>
    </S.Container>
  );
}

export default MovieCategory;
