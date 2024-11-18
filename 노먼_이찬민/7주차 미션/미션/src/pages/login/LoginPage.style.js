import { styled } from "styled-components";

const Container = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 80vw;
  height: 40%;
  min-height: 50vw;

  h2 {
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 10px;
  }
`;

export { Container, MainBox };
