import { styled } from "styled-components";

const Container = styled.section`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(120px, 1fr)
  ); // 140px, 3fr 과 동일
  grid-template-rows: repeat(3, 270px);
  /* grid-auto-rows: 240px; */ // row 수 자동 계산
  gap: 10px;
  margin-top: 20px;
`;

export { Container };
