import styled from "styled-components";
import { Link } from 'react-router-dom';

const Nav = styled.nav `
    display: flex;
    min-height: 60px;
    align-items: center;
`
const StyledLink = styled(Link)`
    width: 100px;
    color: #91D8FA;
    text-decoration-line: none;
    font-size: 23px;
    margin-left: 20px;
    font-weight: bold;
`

export {Nav, StyledLink}