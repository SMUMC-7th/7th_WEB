import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const Title = styled.h2`
    text-align: center;
`;

const TodoInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
        border: 1px solid #b8b8b8;
        height: 25px;
        border-radius: 5px;
        padding: 0 5px;
    }
`;
export { Container, Title, TodoInputs };
