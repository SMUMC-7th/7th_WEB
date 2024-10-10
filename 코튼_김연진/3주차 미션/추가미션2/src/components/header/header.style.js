import styled from "styled-components";
import {Link} from "react-router-dom"
const Container = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    color: white;
    align-items: center;
`
const Logo = styled(Link)`
    display: flex;
    width: auto;
    color: white;
    margin-left: 20px;
    font-size: 20px;
    text-decoration: none;
`
export {Container, Logo}