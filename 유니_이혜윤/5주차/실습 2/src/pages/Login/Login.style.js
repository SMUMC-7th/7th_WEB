import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;

  h2 {
    padding-bottom: 20px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  margin: 20px;
  gap: 20px;

  input {
    width: 320px;
    height: 40px;

    border-radius: 15px;
    border: none;
    cursor: pointer;
    padding: 0 15px;
  }

  button {
    width: 320px;
    height: 40px;

    border-radius: 15px;
    border: none;
    cursor: pointer;

    background-color: #f2085a;
    color: white;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;

export { LoginContainer, LoginForm, ErrorText };
