import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    background-color: black;
    color: white;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 20px;
`;

const Title = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 30px;
    margin: 10px;
`;

const Buttons = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled(Link)`
    background-color: #28aeff;
    display: flex;
    width: 60px;
    border: none;
    border-radius: 10px;
    height: 30px;
    text-decoration: none;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 15px;
`;

const Text = styled.div`
    display: flex;
    color: white;
    height: 30px;
`;

export { Container, Title, Buttons, Button, Text };
