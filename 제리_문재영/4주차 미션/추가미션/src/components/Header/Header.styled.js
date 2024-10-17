import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(30, 30, 30);
`
const Header = styled.h1`
  color: white;
`
const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-right: 10px;
  
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: cyan;
  border: none;
  border-radius: 8px;
  width: 60px;
  &:hover{
    cursor: pointer;
    filter: brightness(0.7);
  }
`


export {Container, Header, ButtonList, Button}