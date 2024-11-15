import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  a,
  button {
    width: 80px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Login = styled(Link)`
  background-color: black;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const User = styled.p`
  font-size: 12px;
  font-weight: 600;
`;

const Signup = styled(Link)`
  background-color: black;

  &:hover {
    background-color: red;
  }
`;

const Logout = styled.button`
  background-color: black;

  &:hover {
    background-color: red;
  }
`;

export { BtnContainer, Login, User, Signup, Logout };
