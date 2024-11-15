import styled, { keyframes } from "styled-components";
const loading = keyframes`
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(120px);
    }
    100% {
      transform: translateY(170px);
    }
`;

const Container = styled.section`
  width: 98%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(120px, 1fr)
  ); // 140px, 3fr 과 동일
  grid-template-rows: repeat(3, 200px);
  /* grid-auto-rows: 240px; */ // row 수 자동 계산
  gap: 10px;
  margin-top: 20px;
`;

const CardBox = styled.div`
  width: 120px;
  height: 200px;
  position: relative;
  border-radius: 10px;
  color: white;
  font-size: 0.8rem;
  background-color: gray;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 12%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.05);
    animation: ${loading} 1.5s ease-in-out infinite;
  }
`;

export { Container, CardBox };
