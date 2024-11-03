import styled from "styled-components";
import Card from "../../components/Card/Card";
import { contents } from "../../mocks/contents";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 20px;
`;

const UmcPage = () => {
  const umcPost = contents.filter((item) => item.category === "umc");

  return (
    <Container>
      {umcPost.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default UmcPage;
