import * as S from './CategoryCard.styled'

function CategoryCard(props){
    const {img_path, text, page_path, text_color} = props;

    return <S.ImgLink to={`${page_path}`}>
        <S.Container>
            <S.Text color={text_color}>{text}</S.Text>
            <S.ImgBox src={`${img_path}`} alt="" />
        </S.Container>
    </S.ImgLink>
    
}
export default CategoryCard;