import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 300px;
  color: white;
`;
const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 200px;
`;
export { Container, Article };
