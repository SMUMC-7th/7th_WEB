import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;
const Article = styled.article`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  background: none;
  z-index: 1;

  h1 {
    background: none;
  }
  p {
    background: none;
    margin: 0;
  }
`;

const Img = styled.img`
  border-radius: 15px;
  opacity: 0.3;
  object-fit: cover;
  object-position: center;
`;
export { Container, Article, Img };
