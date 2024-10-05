import styled from "styled-components";

const Container = styled.div`
  width: 80%;

  margin: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-auto-rows: 300px;
`;

export { Container };
