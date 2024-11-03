import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 50px;

`
const Title = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    border: 1px solid #87CEFA;
    padding: 10px;
    border-radius: 10px;
    max-height: 150px;
    min-height: 30px;
    overflow: auto;
    font-size: 15px;
`
const Content = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid #87CEFA;
    padding: 10px;
    border-radius: 10px;
    max-height: 300px;
    min-height: 250px;
    overflow: auto;
    font-size: 15px;
`
const TodoInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    max-height: 500px;
    gap: 10px
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
const Checkbox = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #87CEFA;
    border: none;
    width: 70px;
    height: 20px;
    border-radius: 5px;
`
const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
`
const ContentBox = styled(Box)`

`
const Explain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
`

const Input = styled.textarea`
    width: 450px;
    min-height: 30px;
    flex-wrap: wrap;
    resize: none;
    overflow: auto;
    border-radius: 10px;
    padding: 10px;
    font-size: 15px;
    border-color: #87CEFA;
`

const InputContent = styled(Input)`
    min-height: 250px;
`
export {Container, Title, Content, Button, Buttons, TodoInfo, Box, Explain, Checkbox, ContentBox, Input, InputContent }
