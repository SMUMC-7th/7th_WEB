import * as S from './luckycardlist.style.js';
import { LUCKY } from "../../mocks/lucky.js";
import LuckyCard from '../LuckyCard/luckycard.jsx';
import ReactDOM from 'react-dom';
import { useState } from 'react';


const LuckyCards = ({ onClose }) => {
    const [clickedCardId, setClickedCardId] = useState(null);  
    const handleCardClick = (id) => {
        setClickedCardId(id);  // 클릭된 카드의 ID 설정
    };

    return ReactDOM.createPortal(
        <S.Container>
            <S.Backdrop onClick={onClose}/>
            <S.Modal>
                <S.Xbutton onClick={onClose}>X</S.Xbutton>
                <S.Title>랜덤으로 오늘의 운세를 뽑아보세요!</S.Title>
                <S.Description>클릭하고 3초 뒤에 자동으로 모달이 닫힙니다</S.Description>
                <S.LuckyCards>
                    {LUCKY.results.map((lucky, _) => {
                        console.log(_)
                        return <LuckyCard key={lucky.id} {...lucky} isClicked={clickedCardId === lucky.id}  // 클릭된 카드인지 여부를 전달
                        onClick={() => handleCardClick(lucky.id)}  // 클릭한 카드의 아이디를 저장
                        onClose={onClose}></LuckyCard>
                    })}
                </S.LuckyCards>
            </S.Modal>
        </S.Container>
        ,
        document.getElementById('modal-root')
    );
};

export default LuckyCards;