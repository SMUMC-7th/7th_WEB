import styled from "styled-components";

const Title = styled.h1`
    color: white;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const SearchInputContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 70px;
    margin: 30px 40px;
    
    input{
        flex: 1;
        padding: 15px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border: 1px solid rgb(220,220,220);
    }
    button {
        width: 80px;
        background-color: deeppink;
        color: white;
        cursor: pointer;
        border: none;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }
`

const MovieCardContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
`
export {Title, SearchInputContainer, MovieCardContainer, Container}