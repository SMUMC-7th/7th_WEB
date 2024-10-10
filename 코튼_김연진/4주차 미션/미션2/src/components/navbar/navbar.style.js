import styled from "styled-components";
import { Link } from 'react-router-dom';

const Nav = styled.nav `
    display: flex;
    min-height: 60px;
    align-items: center;
    background-color: #1e1e1e;
    justify-content: space-between;

`
const StyledLink = styled(Link)`
    width: 100px;
    color: #FF1E9D;
    text-decoration-line: none;
    font-size: 23px;
    margin-left: 20px;
    font-weight: bold;
`

const Button = styled(Link)`
    display: flex;
    border-radius: 10px;
    width: 70px;
    height: 30px;
    border: none;
    color: white;
    align-items: center;
    justify-content: center;
    text-decoration-line: none;
    background-color: black;
    &: hover {
        background-color: white;
        color: black;
    }
`

const Buttons = styled.div`
    display: flex;
    margin-right: 10px;
`

export {Nav, StyledLink, Button, Buttons}