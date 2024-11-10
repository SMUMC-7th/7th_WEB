import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const ScrollContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export { Column, Container, MovieContainer, TextContainer, ScrollContainer };
