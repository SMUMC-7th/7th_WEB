import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
    signup: string;
}

const Nav = styled.nav`
    display: flex;
    min-height: 60px;
    align-items: center;
    background-color: #1e1e1e;
    justify-content: space-between;
`;
const StyledLink = styled(Link)`
    width: 100px;
    color: #ff1e9d;
    text-decoration-line: none;
    font-size: 23px;
    margin-left: 20px;
    font-weight: bold;
`;

const Button1 = styled(Link)<ContainerProps>`
    display: flex;
    border-radius: 10px;
    width: 70px;
    height: 30px;
    border: none;
    color: white;
    align-items: center;
    justify-content: center;
    text-decoration-line: none;
    background-color: ${(props) =>
        props.signup === 'true' ? '#FF1E9D' : 'black'};
    &: hover {
        background-color: white;
        color: black;
    }
`;

const Button2 = styled.button`
    display: flex;
    border-radius: 10px;
    width: 70px;
    height: 30px;
    border: none;
    color: white;
    align-items: center;
    justify-content: center;
    background-color: black;
    &: hover {
        background-color: white;
        color: black;
    }
`;

const Buttons = styled.div`
    display: flex;
    margin-right: 10px;
    gap: 10px;
`;

const Text = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`;
export { Nav, StyledLink, Button1, Button2, Buttons, Text };
