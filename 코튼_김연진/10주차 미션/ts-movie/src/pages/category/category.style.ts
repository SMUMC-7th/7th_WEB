import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const Text = styled.div`
    color: white;
    margin: 20px;
    font-size: 25px;
    width: 90%;
`;
const CategoryList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-left: 20px;
    flex-wrap: wrap;
    width: 90%;
`;

export { Container, Text, CategoryList };
