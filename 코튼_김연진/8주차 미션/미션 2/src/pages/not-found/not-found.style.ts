import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    color: black;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 30px;
`;

const Button = styled(Link)`
    display: flex;
    border-radius: 20px;
    width: 200px;
    height: 30px;
    border: none;
    color: black;
    align-items: center;
    justify-content: center;
    text-decoration-line: none;
    background-color: skyblue;
    font-size: 20px;
`;

export { Container, Button };
