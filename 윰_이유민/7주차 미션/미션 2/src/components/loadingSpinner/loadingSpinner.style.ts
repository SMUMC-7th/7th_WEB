import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 200px;
  margin: auto 60px;
`

const Spinner = styled.div`
  margin: calc(50% - 25px) auto;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  border-top-color: white;
  border-radius: 100%;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    100%
    {
      transform: rotate(360deg);
    }
  }
`

export {Container, Spinner}