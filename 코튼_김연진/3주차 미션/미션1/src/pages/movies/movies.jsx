import * as S from './movies.style';
import CategoryCard from '../../components/categoryCard/categoryCard';
import CategoryData from "../../constants/category"

const Movie = () => {
    return (
        <S.Container>
            <S.Text>카테고리</S.Text>
            <S.CategoryList>
                {CategoryData.map((item, idx) => { 
                    return <CategoryCard key={idx} {...item} />
                })}
            </S.CategoryList>
        </S.Container>
    );
};

export default Movie;