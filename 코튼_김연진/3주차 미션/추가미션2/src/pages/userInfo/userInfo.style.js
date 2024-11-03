import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const Title = styled.div`
    display: flex;
    color: white;
    margin-top: 40px;
    font-size: 25px;
`
const Content = styled.div`
    display: flex;
    color: white;
`

const Text = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
export {Container, Title, Content, Text, Alert}