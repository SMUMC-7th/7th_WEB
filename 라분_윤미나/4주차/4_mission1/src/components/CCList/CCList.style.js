import styled from "styled-components";

const Container = styled.section`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 200px;
`;

export default Container;
