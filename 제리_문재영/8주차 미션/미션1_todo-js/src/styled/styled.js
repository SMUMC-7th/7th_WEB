import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 20px;;
`

const Input = styled.input`
    padding: 10px;
    border: 1px solid black;
    border-radius: 8px;
`

export {Button, Input, Form}