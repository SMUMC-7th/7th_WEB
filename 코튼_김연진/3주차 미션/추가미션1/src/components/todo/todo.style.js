import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
    width: 400px;
    align-items: flex-start;
    align-items: center;
`

const Title =  styled(Link)`
    display: block;
    width: 130px;
    text-decoration: none;
    color: black;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;  
`

const Content = styled.div`
    display: flex;
    width: 130px;
`

const Checkbox = styled.input`
`

const Button = styled(Link)`
    min-width: 65px;
    min-height: 25px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`
export {Container, Title, Content, Checkbox, Button}