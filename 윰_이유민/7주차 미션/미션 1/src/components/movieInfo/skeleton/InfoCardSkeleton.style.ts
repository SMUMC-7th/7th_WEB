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
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 340px;
  width: 100%;
  height: 340px;
  border-radius: 14px;
  background-color: rgb(40, 40, 40);
`;

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const TitleBox = styled.div`
  width: 500px;
  height: 28px;
  background-color: rgb(230, 230, 230);
  margin: 0 0 10px 20px;
  animation: ${skeleton} 3s infinite linear alternate;
  border-radius: 8px;
`;

const AvgBox = styled.div`
  width: 500px;
  height: 16.5px;
  background-color: rgb(230, 230, 230);
  margin: 0 0 10px 20px;
  animation: ${skeleton} 3s infinite linear alternate;
  border-radius: 8px;
`;

const DateBox = styled.div`
  width: 500px;
  height: 16.5px;
  background-color: rgb(230, 230, 230);
  margin: 0 0 10px 20px;
  animation: ${skeleton} 3s infinite linear alternate;
  border-radius: 8px;
`;

const TimeBox = styled.div`
  width: 500px;
  height: 16.5px;
  background-color: rgb(230, 230, 230);
  margin: 0 0 10px 20px;
  animation: ${skeleton} 3s infinite linear alternate;
  border-radius: 8px;
`;

const TagLineBox = styled.div`
  width: 500px;
  height: 19.5px;
  background-color: rgb(230, 230, 230);
  margin: 0 0 10px 20px;
  animation: ${skeleton} 3s infinite linear alternate;
  border-radius: 8px;
`;

const OverviewBox = styled.div`
  width: 500px;
  height: 66px;
  background-color: rgb(230, 230, 230);
  margin: 0 0 10px 20px;
  animation: ${skeleton} 3s infinite linear alternate;
  border-radius: 8px;
`;

export {
  Container,
  PosterContainer,
  DetailContainer,
  TitleBox,
  AvgBox,
  DateBox,
  TimeBox,
  TagLineBox,
  OverviewBox,
};
