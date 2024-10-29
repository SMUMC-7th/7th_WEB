import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(20, 20, 20);
    height: 50px;
    
`
const Logo = styled(Link)`
  color: rgb(200, 0, 0);
  margin: 10px;
  margin-left: 35px;
  border: none;
  text-decoration: none;
`

const Btn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  margin: 10px;
  color: white;
  border-radius: 7px;
  background-color: ${props => props.color || 'deeppink'};
  border: none;
  text-decoration-line: none;
  cursor: pointer;
  &:hover{
    filter: brightness(0.5);
  }
`
const Btns = styled.div`
    height: 50px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export {Nav, Logo, Btn, Btns}