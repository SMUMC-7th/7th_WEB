import styled from "styled-components";
import { Link } from 'react-router-dom';

const Sidebar = styled.nav `
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 10px;  
    background-color: #1e1e1e;
`
const StyledLink = styled(Link)`
    margin-top: 10px;
    margin-left: 20px;
    width: 100px;
    color: white;
    text-decoration-line: none;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 10px
`

export {Sidebar, StyledLink}