import styled, { keyframes } from "styled-components";

const skeleton = keyframes`
0%{
opacity:1;
}
30% {opacity:0.7;}
50% {opacity:0.3;}
80% {opacity:0.8;}
100% {opacity:1;}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const CardMain = styled.div`
  width: 140px;
  height: 200px;

  background-color: rgb(230, 230, 230);
  overflow: hidden;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;
const TextWrapper = styled.div`
  width: 140px;
  height: 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 5px;
`;

const TitleBox = styled.div`
  height: 10px;
  background-color: rgb(230, 230, 230);
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;
const DescriptionBox = styled.div`
  height: 10px;
  background-color: rgb(230, 230, 230);
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;

export { Container, CardMain, TextWrapper, TitleBox, DescriptionBox };
