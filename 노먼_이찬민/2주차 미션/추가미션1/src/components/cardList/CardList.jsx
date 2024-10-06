import React from "react";
import * as S from "./CardList.style";
import { somethings } from "../../mocks/somethings";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function CardList(props) {
  const { currentCategory } = props;
  console.log(currentCategory);
  const navigate = useNavigate();

  return (
    <S.Container>
      {!currentCategory &&
        somethings.map((item) => {
          return (
            <Card
              onClick={() => navigate(`/content/${item.id}`)}
              key={item.id}
              item={item}
            ></Card>
          );
        })}
      {currentCategory &&
        somethings.map((item) => {
          console.log(item.category);
          return (
            item.category === currentCategory && (
              <Card
                onClick={() => navigate(`/content/${item.id}`)}
                key={item.id}
                item={item}
              ></Card>
            )
          );
        })}
    </S.Container>
  );
}

export default CardList;
