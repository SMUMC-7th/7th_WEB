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
  gap: 10px;

  input {
    width: 320px;
    height: 40px;

    border-radius: 15px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
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
    margin-top: 10px;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  padding-left: 10px;
`;

export { LoginContainer, LoginForm, ErrorText };
