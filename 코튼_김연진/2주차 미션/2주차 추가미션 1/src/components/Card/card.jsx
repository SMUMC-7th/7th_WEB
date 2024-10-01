import * as S from './card.style'
import PropTypes from 'prop-types';  // PropTypes 추가

function Card(props) {

    const { image_path , title, content, date} = props;
    console.log(props);  
    return (
        <S.Container>
            <img src= {image_path} alt="" />  {/* image_path를 직접 사용 */}
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

Card.propTypes = {
    image_path: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    content: PropTypes.string.isRequired, 
    date: PropTypes.string.isRequired
};

export default Card;

