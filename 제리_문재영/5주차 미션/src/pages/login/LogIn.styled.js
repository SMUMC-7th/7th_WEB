import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

const Title = styled.h1`
    color: white;
`

const Input = styled.input`
    width: 400px;
    height: 50px;
    border: none;
    border-radius: 10px;
`

const Error = styled.p`
    color: red;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export {Title, Input, Container, Error, Form}