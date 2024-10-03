import * as S from './movies.style';
import CategoryCard from '../../components/categoryCard/categoryCard';
import categoryData from "../../mocks/category"; 

const Movie = () => {
    return (
        <S.Container>
            <S.Text>카테고리</S.Text>
            <S.CategoryList>
                {categoryData.results.map((item) => { 
                    return <CategoryCard key={item.id} {...item} />;
                })}
            </S.CategoryList>
        </S.Container>
    );
};

export default Movie;