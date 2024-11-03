import * as S from './card.style'

function Card(props) {

    const { id, image_path , title, content, date} = props;
    console.log(props);  
    return (
        <S.Container to={`/content/${id}`}>
            <img src= {image_path} alt="" />  
            <div style={{display:'flex',flexDirection:'column', height:'150px', marginLeft: '10px',justifyContent: 'space-between'}}>
                <S.Text>  
                    <S.Title>{title}</S.Title>
                    <S.Content>{content}</S.Content>
                </S.Text>
                <S.Date>{date}</S.Date>
            </div>
        </S.Container>
    );
}

export default Card;

