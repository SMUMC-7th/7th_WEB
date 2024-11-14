import * as S from './category.style';
import CategoryCard from '../../components/categoryCard/categoryCard';
import CategoryData from '../../constants/Menu';

const Movie = () => {
    return (
        <S.Container>
            <S.Text>카테고리</S.Text>
            <S.CategoryList>
                {CategoryData.map((item, _) => {
                    console.log(_);
                    return <CategoryCard key={item.id} {...item} />;
                })}
            </S.CategoryList>
        </S.Container>
    );
};

export default Movie;
