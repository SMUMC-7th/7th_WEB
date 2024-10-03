import React from "react";
import * as S from "./Card.style";

function Card(props) {
  const { item } = props;
  console.log(item);
  return (
    <S.Container>
      <S.Image url={item.image} />
      <S.RightBox>
        <S.Title>{item.title}</S.Title>
        <S.Content>{item.content}</S.Content>
        <S.Date>{item.date}</S.Date>
      </S.RightBox>
    </S.Container>
  );
}

export default Card;
