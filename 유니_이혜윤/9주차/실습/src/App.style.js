import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 450px;
  height: 650px;
  border-radius: 20px;
  background-color: #e8f1ff;
  padding: 30px;
`;

export { Container, TodoBox };
