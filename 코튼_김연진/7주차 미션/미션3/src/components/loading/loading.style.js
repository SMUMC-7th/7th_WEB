import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;

    justify-content: center;
`;

const MovieCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
    gap: 20px;
    margin-bottom: 30px;
`;

export { Container, MovieCardList };
