import * as S from './Movies.styled'
import CategoryCards from '../../mocks/CategoryCards';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Movies = () => {
    // console.log("gkgk");/
    
    return(
        <S.Container>
            <S.Title>카테고리</S.Title>
            <S.CategoryList>
                {CategoryCards.map((item,idx) => {
                    return <CategoryCard key={idx} {...item}/>
                })}
            </S.CategoryList>
        </S.Container>
    )
}
export default Movies;