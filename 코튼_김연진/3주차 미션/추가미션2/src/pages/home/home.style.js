import styled from "styled-components"
import {Link} from "react-router-dom"
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 40px;
`

const Title = styled.div`
    margin-top: 100px;
    display: flex;
    color: white;
    font-size: 40px;
    justify-content: center;
`

const Buttons = styled.div`
    display: flex;
    color: white;
    justify-content: center;
    gap: 10px;
`
const Button1 = styled(Link)`
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-color: #800080;
    height: 30px;
    border-radius: 20px;
    text-decoration: none;
    padding: 0 15px;
`

const Button2 = styled.button`
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-color: #800080;
    padding: 0 15px;
    height: 30px;
    border-radius: 20px;
    border: none;
`
const Button3 =styled(Button1)`
    width: 150px;
`

export {Container, Title, Buttons, Button1, Button2,Button3}