import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-basis: 0; */
`;

const Logo = styled.div`
  width: 20%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 550;
`;

const ButtonBox = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 20px;

  button {
    width: 20%;
    background-color: #0e96f2;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
  }
`;

export { Container, ButtonBox, Logo };
