import styled from "styled-components";

const Container = styled.div`
  width: 140px;
  height: 200px;
  position: relative;
  color: white;

  img {
    width: 140px;
    height: 200px;
    border-radius: 10px;
  }
  div {
    font-size: 15px;
  }
  p {
    margin-top: 5px;
    font-size: 13px;
  }
`;
const Backdrop = styled.div`
  width: 140px;
  height: 200px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
`;

export { Container, Backdrop };
