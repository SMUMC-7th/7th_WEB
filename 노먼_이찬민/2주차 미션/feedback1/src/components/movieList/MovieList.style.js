import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(140px, 1fr)
  ); // 140px, 3fr 과 동일
  grid-template-rows: repeat(240px, 3fr);
  /* grid-auto-rows: 240px; */ // row 수 자동 계산
  gap: 10px;
`;

export { Container };
