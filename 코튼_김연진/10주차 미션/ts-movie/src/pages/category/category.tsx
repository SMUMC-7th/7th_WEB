import * as S from './category.style';
import CategoryCard from '../../components/categoryCard/categoryCard';
import CategoryData from '../../constants/Menu';

const Movie = () => {
    return (
        <S.Container>
            <S.Text>카테고리</S.Text>
            <S.CategoryList>
                {CategoryData.map((item, idx) => {
                    return <CategoryCard key={idx} {...item} />;
                })}
            </S.CategoryList>
        </S.Container>
    );
};

export default Movie;
