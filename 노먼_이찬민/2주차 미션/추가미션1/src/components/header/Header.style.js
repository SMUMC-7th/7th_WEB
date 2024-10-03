import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
`;

const LeftBox = styled.div`
  width: 20%;
  display: flex;
  img {
  }
  section {
    font-size: 2rem;
    display: flex;
    align-items: center;
  }
`;

export { Container, LeftBox };
