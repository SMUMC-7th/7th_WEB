import styled from "styled-components";

const InputBox = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    border: none;
    border-radius: 10px;
    width: 300px;
    height: 25px;
    padding-left: 10px;
  }

  button {
    border: none;
    border-radius: 10px;
    width: 312px;
    height: 25px;
    cursor: pointer;
  }
`;

export { InputBox };
