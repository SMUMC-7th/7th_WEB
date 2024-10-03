import React, { useState } from 'react';

import { luck } from '../../mock/luck';
import Container from './Luckycards.style';
import Card from './Card';

const LuckyCards = ({ onClose }) => {
  const [clickCardId, setClickCardId] = useState(null);

  const handleCardClick = (id) => {
    //클릭한 LuckyCard id를 상태에 저장
    setClickCardId(id);

    //LuckyCard 클릭 3초 후 모달 닫음
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <Container>
      {luck.map((content) => (
        <Card
          key={content.id}
          isClicked={clickCardId === content.id}
          content={content.content}
          onClick={() => handleCardClick(content.id)}
        ></Card>
      ))}
    </Container>
  );
};

export default LuckyCards;
