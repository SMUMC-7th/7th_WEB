import styled from "styled-components";
const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Btns = styled.div`
  display: flex;
  gap: 10px;
  button {
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: skyblue;
  }
`;
export { Container, Btns };
