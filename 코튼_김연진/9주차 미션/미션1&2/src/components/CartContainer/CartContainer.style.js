import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 80%;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
`;
const Title = styled.div`
    display: flex;
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
`;

const Album = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-left: 10px;
`;

const Footer = styled.footer`
    display: flex;
    margin: 10px 0;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    hr {
        border: 1px solid black;
        width: 100%;
    }
`;

const Button = styled.button`
    width: 200px;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 40px;
    background-color: #ffffff;
    border: 1px solid red;
    height: 30px;
    border-radius: 10px;
    color: red;
    font-size: 15px;
`;

const TotalPrice = styled.div`
    display: flex;
    width: 100%;
    span {
        margin-left: auto;
    }
`;
export { Container, Title, Album, Footer, Button, TotalPrice };
