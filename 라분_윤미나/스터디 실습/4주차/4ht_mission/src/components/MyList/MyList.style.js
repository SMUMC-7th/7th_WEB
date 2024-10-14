import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  button {
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: skyblue;
  }
`;
const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px;
`;

export { Container, Buttons, List };
