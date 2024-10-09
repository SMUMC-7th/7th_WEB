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
const Box = styled.div`
    display: flex;
    gap : 30px;
    margin-top: 30px;
    background-color: purple;
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 15px 0;

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

const Text = styled.div`
    display: flex;
    color: white;
`
const Texts = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 30px;
`
const Img = styled.img`
    width: 250px;
    border-radius: 10px;

`
export {Container, Title, Box, Alert, Text, Img, Texts}