import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 80%;
  height: 300px;
  border-radius: 5px;
  background-color: #f5f5f5;

  img {
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }
`;

export { Container, Card };
