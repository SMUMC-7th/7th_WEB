import styled from "styled-components";

const Container = styled.div`
    width: 140px;
    height: 220px;
    position: relative;

    img {
        width: 140px;
        height: 200px;
        border-radius: 10px;
    }
`

const Backdrop = styled.div`
    width: 140px;
    height: 200px;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
`

const Title = styled.div`
    display: block;
    width: 130px;
    color: white;
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

const Release = styled.div`
    display: flex;
    color: white;
    font-size: 10px;
`

export {Container, Backdrop, Title, Release}