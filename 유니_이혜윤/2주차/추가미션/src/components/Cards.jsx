import styled from "styled-components";
import Card from "./Card/Card";
import { contents } from "../mocks/contents";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 20px;
`;

const Cards = () => {
  return (
    <Container>
      {contents.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default Cards;
