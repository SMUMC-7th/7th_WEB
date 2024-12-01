import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 20px;
`;

const Member = styled.div`
    display: flex;
    width: 100%;
    color: black;
    font-size: 12px;
    flex-wrap: wrap;
    gap: 10px;
`;

const Title = styled.div`
    margin-top: 25px;
    display: block;
    width: 130px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    position: relative;
`;

const Alert = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    height: 154px;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
`;
const Button = styled(Link)`
    color: white;
    background-color: black;
    border: none;
    width: auto;
    position: absolute;
    top: 35px;
    right: 25px;
    text-decoration: none;
`;

export { Container, Title, Member, Alert, Button };
