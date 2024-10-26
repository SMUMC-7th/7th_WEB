import * as S from './MovieCategory.style.js';
import { CATEGORY } from '../../constants/menu.js';

function MovieCategory() {
  return (
    <S.Container>
      <h3>카테고리</h3>
      <S.CategoryContainer>
        {CATEGORY.map((item, idx) => (
          <S.CategoryItem key={idx} img={item.img_path} to={item.url_path}>
            <p>{item.text}</p>
          </S.CategoryItem>
        ))}
      </S.CategoryContainer>
    </S.Container>
  );
}

export default MovieCategory;
