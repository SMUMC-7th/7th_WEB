import * as S from './categoryCard.style';

function categoryCard(props) {
    const { img_path, text, move_path } = props;

    return (
        <S.StyledLink to={`${move_path}`}>
            <S.Container>
                <S.Text>{text}</S.Text>
                <img
                    src={`${img_path}`}
                    alt="해당 카테고리로 이동할 수 있는 이미지"
                />
            </S.Container>
        </S.StyledLink>
    );
}

export default categoryCard;
