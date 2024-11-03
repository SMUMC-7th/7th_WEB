import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.div`
  width: 140px;
  height: 200px;
  background-color: aliceblue;
  position: relative;
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 140px;
    height: 200px;
    border-radius: 20px;
  }
`

const Backdrop = styled.div`
    width: 140px;
    height: 200px;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 2px;

  h5 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 10px;
  }
`

export { Container, ImageContainer, Backdrop, InfoContainer }
