import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    color: white;
    width: 100%;
    flex-direction: column;
    margin-bottom: 30px;
`;
const MovieList = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 20px;
    width: 100%;
    flex-wrap: wrap;
    color: white;
    justify-content: center;
`;
const Alert = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    height: 400px;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
`;
const Title = styled.div`
    display: flex;
    color: white;
    font-size: 20px;
    width: 95%;
    margin-left: 30px;
    margin-top: 30px;
    align-self: center;
`;
export { Container, MovieList, Alert, Title };
