import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    width: 100%;
`;
const SearchInput = styled.input`
    border: 1px solid #b8b8b8;
    height: 25px;
    border-radius: 5px;
    padding: 0 5px;
    width: 100%;
`;

const Todolist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Container2 = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    button {
        height: 27px;
        margin-left: auto;
    }
`;
export { Container, SearchInput, Todolist, Container2 };
