import React from "react";
import * as S from "./CardList.style";
import { somethings } from "../../mocks/somethings";
import Card from "./Card";

function CardList() {
  return (
    <S.Container>
      {somethings.map((item) => {
        return <Card key={item.id} item={item}></Card>;
      })}
    </S.Container>
  );
}

export default CardList;
