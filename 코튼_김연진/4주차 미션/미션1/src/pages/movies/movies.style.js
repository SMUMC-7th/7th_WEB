import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const Text = styled.div`
    color: white;
    margin: 20px;
    font-size: 25px;
`;
const CategoryList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-left: 20px;
`;

export { Container, Text, CategoryList };
