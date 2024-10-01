import styled from "styled-components";

const Container = styled.div`
    height: 150px;
    width: 150px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C8FAC8;
    border-radius: 15px;
`
const Cover = styled.div`
    height: 150px;
    width: 150px;
    align-items: center;
    justify-content: center;
    display: flex;
`

const Content = styled.div`
    display: flex;
    height: 150px;
    width: 150px;
    align-items: center;
    font-size: small;
    padding: 10px;
    word-break: keep-all;
    text-align: center;
`

export {Container, Cover, Content}