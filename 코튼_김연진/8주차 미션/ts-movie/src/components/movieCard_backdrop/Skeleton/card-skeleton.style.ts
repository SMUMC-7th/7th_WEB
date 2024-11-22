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
    justify-content: flex-start;
`;
const CardMain = styled.div`
    width: 270px;
    height: 140px;
    background-color: rgb(230, 230, 230);
    border-radius: 10px;
    overflow: hidden;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`;
const TextWrapper = styled.div`
    width: 100%;
    height: 14px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 5px;
`;
const TitleBox = styled.div`
    background-color: rgb(230, 230, 230);
    height: 14px;
    border-radius: 5px;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`;

export { Container, CardMain, TextWrapper, TitleBox };
