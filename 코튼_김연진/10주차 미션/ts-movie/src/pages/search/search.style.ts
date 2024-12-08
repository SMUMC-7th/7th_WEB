import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;
const Text = styled.div`
    color: white;
    margin: 10px;
    font-size: 30px;
`;

const Search = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SearchBox = styled.input`
    width: calc(100% - 130px);
    height: 100%;
    padding: 0;
    position: relative;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    padding-left: 10px;
`;

const Button = styled.button`
    height: 100%;
    width: 70px;
    padding: 0;
    background-color: #ff1e9d;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: white;
    &:hover {
        background-color: gray;
        color: black;
    }
`;

const MovieCardList = styled.div`
    display: flex;
    width: auto;
    flex-wrap: wrap;
    margin: 20px 20px;
    gap: 20px;
    margin-bottom: 30px;
    justify-content: center;
`;
export { Container, Text, SearchBox, Button, Search, MovieCardList };
