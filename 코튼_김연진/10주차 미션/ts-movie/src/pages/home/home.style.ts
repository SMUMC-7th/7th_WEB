import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #202020;
`;
const Alert = styled.div`
    display: flex;
    margin: 20px;
    gap: 20px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
`;
const Title = styled.div`
    display: flex;
    color: white;
    font-size: 25px;
    width: 90%;
    margin-top: 20px;
`;

const MovieList = styled.div`
    display: flex;
    margin: 20px;
    gap: 20px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
`;
export { Container, Alert, Title, MovieList };
