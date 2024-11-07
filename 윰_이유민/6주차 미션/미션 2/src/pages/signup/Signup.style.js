import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 50px 0;

  h2 {
    margin-bottom: 14px;
  }

  input,
  button {
    height: 36px;
    border-radius: 10px;
  }
`;

const Section = styled.section`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: start;
`;

const Title = styled.p`
  font-size: 14px;
`;

const Input = styled.input`
  width: 270px;
  padding-left: 10px;
  color: black;
  border: ${(props) => (props.error ? '1.5px solid red' : 'none')};

  &:focus {
    outline: none;
  }
`;


const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
`;

const SignupBtn = styled.button`
  width: 280px;
  background-color: red;
  cursor: pointer;
  border: none;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) => (props.disabled ? 'gray' : 'brown')};
  }
`;

export {
  Form,
  Section,
  Title,
  Input,
  ErrorMsg,
  SignupBtn,
};
