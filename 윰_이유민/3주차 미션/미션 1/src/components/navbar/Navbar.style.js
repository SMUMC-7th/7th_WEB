import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
`

const Logo = styled(Link)`
  color: red;
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;

  &:visited {
    color: red;
  }
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  a {
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    text-align: center;
    padding-top: 8px;
  }
`

const Login = styled(Link)`
  background-color: black;

  &:hover {
    background-color: white;
    color: black;
  }
`

const Signup = styled(Link)`
  background-color: black;

  &:hover {
    background-color: red;
  }
`

export { Nav, Logo, BtnContainer, Login, Signup }