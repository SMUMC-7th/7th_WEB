import styled from "styled-components";

const Title = styled.h1`
    color: white;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70px;
    margin: 10px;
    
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
export {Title, Container}