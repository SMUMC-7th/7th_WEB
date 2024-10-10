import styled from "styled-components"
import {Link} from "react-router-dom"
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 50px;
    margin: 15px 0;
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
const Button = styled(Link)`
    text-decoration: none;
    border-radius: 10px;
    width: 60px;
    height: 20px;
    background-color: purple;
`
export {Container, Alert, Button}