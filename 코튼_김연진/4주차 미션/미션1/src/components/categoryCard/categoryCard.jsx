import * as S from './categoryCard.style';

function categoryCard(props) {
    const { img_path, text, move_path } = props;

    return (
        <S.StyledLink to={`${move_path}`}>
            <S.Container>
                <S.Text>{text}</S.Text>
                <img src={`${img_path}`} alt="" />
            </S.Container>
        </S.StyledLink>
    );
}

export default categoryCard;
