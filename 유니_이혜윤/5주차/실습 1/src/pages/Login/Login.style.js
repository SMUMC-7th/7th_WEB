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
    padding-left: 15px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0;
`;

const SubmitButton = styled.input`
  background-color: ${(props) => (props.isValid ? "#F2085A" : "gray")};
  color: white;
  cursor: ${(props) => (props.isValid ? "pointer" : "not-allowed")};
`;

export { LoginContainer, LoginForm, ErrorMessage, SubmitButton };
