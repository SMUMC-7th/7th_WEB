import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled(Link)`
    height: 150px;
    position: relative;
    display: flex;
    align-items: center;
    text-decoration-line: none;
    margin-bottom: 15px;
    color: black;
    img {
        height: 150px;
        width: 150px;
        border-radius: 5px;
        object-fit: cover;
    }
`
const Title = styled.h3`
    margin-top: 5px;
`

const Content = styled.h6`
    margin-top: 0px;
    color: grey;
`
const Date = styled.h6`
    margin-bottom: 5px;
    color: grey;
`

const Text = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1;
`

export {Container, Title, Content, Date, Text}