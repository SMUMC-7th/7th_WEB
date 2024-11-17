import styled,{keyframes}  from "styled-components";

const skeletion = keyframes`
    0%{
        opacity: 1;
    }
    30%{
        opacity: 0.7;
    }
    50%{
        opacity: 0.5;
    }
    70%{
        opacity: 0.8;
    }
    100%{
        opacity: 1;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const CardMain = styled.div`
    width: 200px;
    height: 290px;
    background-color: rgb(160,160,160); 
    border-radius: 15px;
    overflow: hidden;
    animation: ${skeletion} 3s 1s infinite linear alternate;
`

const TextWrapper = styled.div`
    width: 200px;
    height: 35px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 5px;
`

const TitleBox = styled.div`
    background-color: rgb(160,160,160); 
    width: 160px;
    height: 20px;
    border-radius: 15px;
    animation: ${skeletion} 3s 1s infinite linear alternate;
`

const DescriptionBox = styled.div`
    background-color: rgb(160,160,160); 
    width: 100px;
    height: 15px;
    border-radius: 15px;
    animation: ${skeletion} 3s 1s infinite linear alternate;
`

export {Container, CardMain, TextWrapper, TitleBox, DescriptionBox}