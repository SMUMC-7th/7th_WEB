import styled from "styled-components"

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
const Text = styled.div`
    display: flex;
    color: white;
    margin: 5px;
`
const Texts = styled.div`
    display: flex;
    color: white;
    margin-left: 20px;
`

const Alert = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
`  

const Form = styled.form `
    margin-left: 20px;
`

const Button = styled.button`
    margin-left: 10px;
    background-color: black;
    color: white;
    border: none;
`
const Inputbox = styled.input`
    placehold: "이름을 입력하세요";
`
export {Container, Text, Alert, Texts,Form,Button, Inputbox}