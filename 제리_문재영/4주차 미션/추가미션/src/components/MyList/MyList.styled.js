import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(30, 30, 30);
`
const Title = styled.h1`
    text-align: center;
    color: white;
`
const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: cyan;
  gap: 10px;
  border: none;
  &:hover{
    cursor: pointer;
    filter: brightness(0.7);
  }
`
const Text = styled.p`
    text-align: center;
    color: white;
`

export {Container, Title, ButtonList, Button, Text}