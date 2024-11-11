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
  width: 100px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const CardMain = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 6px;
  background-color: rgb(230, 230, 230);
  animation: ${skeleton} 3s infinite linear alternate;
`;

const NameBox = styled.div`
  width: 90px;
  height: 16px;
  border-radius: 8px;
  background-color: rgb(230, 230, 230);
  animation: ${skeleton} 3s infinite linear alternate;
`;

const CharacterBox = styled.div`
  width: 90px;
  height: 12px;
  border-radius: 8px;
  background-color: rgb(230, 230, 230);
  animation: ${skeleton} 3s infinite linear alternate;
`;

export { Container, CardMain, NameBox, CharacterBox };
