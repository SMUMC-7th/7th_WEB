import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    background-color: black;
    height: 60px;
    color: white;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const Buttons = styled.div`
    display: flex;
    gap: 10px;
    margin: 10px;
`;

const Button = styled.button`
    background-color: #28aeff;
    width: 60px;
    border: none;
    border-radius: 10px;
    height: 30px;
    color: white;
`;
const Logo = styled.div`
    width: 200px;
    color: white;
    font-size: 20px;
    margin: 10px;
`;
export { Container, Buttons, Button, Logo };
