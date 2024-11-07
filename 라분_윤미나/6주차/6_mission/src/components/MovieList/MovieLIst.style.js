import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
const MovieContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
const TextContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  color: white;
`;

export { Container, MovieContainer, TextContainer };
