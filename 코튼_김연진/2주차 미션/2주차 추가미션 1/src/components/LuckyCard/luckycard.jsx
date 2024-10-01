import * as S from './luckycard.style';
import PropTypes from 'prop-types';  
import { useEffect } from 'react';

function LuckyCard(props) {
    const { content, isClicked, onClick, onClose } = props;

    useEffect(() => {
        let timer;
        if (isClicked) {
            // 3초 뒤에 onClose 호출
            timer = setTimeout(() => {
                onClose();
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [isClicked, onClose]);

    return (
        <S.Container onClick={onClick}>
            {!isClicked && <S.Cover>🍀</S.Cover>}
            {isClicked && <S.Content>{content}</S.Content>}
        </S.Container>
    );
}

LuckyCard.propTypes = {
    content: PropTypes.string.isRequired,  
    isClicked: PropTypes.bool.isRequired, 
    onClick: PropTypes.func.isRequired,    
    onClose: PropTypes.func.isRequired
};

export default LuckyCard;