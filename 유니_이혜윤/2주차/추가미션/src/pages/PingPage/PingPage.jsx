import styled from "styled-components";
import Card from "../../components/Card/Card";
import { contents } from "../../mocks/contents";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 20px;
`;

const PingPage = () => {
  const pingPost = contents.filter((item) => item.category === "아자핑");

  return (
    <Container>
      {pingPost.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default PingPage;
