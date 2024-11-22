import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Alert = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Button = styled(Link)`
    text-decoration: none;
    border-radius: 30px;
    width: 100px;
    height: 20px;
    background-color: skyblue;
    color: black;
    padding: 5px 10px;
`;
export { Alert, Button };
