import styled from "styled-components";
import {Link} from "react-router-dom"

const Container = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); 
    grid-auto-rows: 240px;
    margin: 10px;
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
