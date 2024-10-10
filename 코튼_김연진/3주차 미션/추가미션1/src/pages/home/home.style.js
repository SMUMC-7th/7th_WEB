import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    gap: 20px;

`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`

const TodoWrite = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
`

const Input = styled.textarea`
    width: 400px;
    font-size: 15px;
    height: 30px;
    display: flex;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid #87CEFA;
    flex-wrap: wrap;
    resize: none;
    overflow: auto;
`

const InputContent = styled(Input)`
    height: 250px;

`
const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Button = styled.button`
    background-color: #91D8FA;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    min-height: 20px;
`
export {Container, Title, TodoWrite, Input, TodoList, InputContent, Form, Button}
