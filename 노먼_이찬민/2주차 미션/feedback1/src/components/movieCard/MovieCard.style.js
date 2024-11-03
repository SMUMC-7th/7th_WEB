import styled from "styled-components";

const Container = styled.div`
  width: 140px;
  height: 200px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BackDrop = styled.div`
  width: 140px;
  height: 200px;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

export { Container, BackDrop };
