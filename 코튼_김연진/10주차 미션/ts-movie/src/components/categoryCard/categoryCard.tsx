import * as S from './categoryCard.style';
interface CategoryCardProps {
    img_path: string;
    text: string;
    move_path: string;
}
function categoryCard({ img_path, text, move_path }: CategoryCardProps) {
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
