import styled, { keyframes } from 'styled-components';

const skeleton = keyframes`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.4;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardMain = styled.div`
  width: 140px;
  height: 200px;
  background-color: rgb(180, 180, 180);
  border-radius: 20px;
  overflow: hidden;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;

const TextWrapper = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 2px;
`;

const TitleBox = styled.div`
  margin: 0;
  height: 16px;
  background-color: rgb(180, 180, 180);
  border-radius: 5px;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;

const DescriptionBox = styled.div`
  margin: 0;
  height: 12px;
  background-color: rgb(180, 180, 180);
  border-radius: 5px;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;

export { Container, CardMain, TextWrapper, TitleBox, DescriptionBox };
