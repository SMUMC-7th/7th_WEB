import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 200px;

  padding: 20px;
  background-color: rgb(109, 0, 51);
  border-radius: 10px;

  img {
    border-radius: 10px;
    width: 200px;
  }
  p {
    background-color: rgb(109, 0, 51);
  }
`;
export { Container, Card };
