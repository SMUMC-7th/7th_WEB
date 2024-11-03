import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    gap: 20px;
    width: 100%;
    justify-content: center;
`;

const Alert = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
`;
export { Container, Alert };
