import styled from "styled-components";

const H3 = styled.h3`
  color: white;
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      width: 400px;
      height: 40px;
      background: white;
      border: none;
      border-radius: 10px;
    }
    p {
      color: red;
      margin: 0px;
      font-size: 12px;
    }
  }
`;

const Button = styled.button`
  background-color: rgb(255, 0, 119);
  color: white;
`;
export { H3, Container, Button };
