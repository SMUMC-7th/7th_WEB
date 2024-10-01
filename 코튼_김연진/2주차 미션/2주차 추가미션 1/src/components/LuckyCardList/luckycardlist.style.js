import styled from "styled-components";

const LuckyCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
`
const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    align-items: center;

`
const Backdrop = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.5;
    position: absolute;
`

const Modal = styled.div`
    display: flex;
    background-color: #fff;
    height: 500px;
    width: 400px;
    flex-direction: column;
    opacity: 1;
    gap: 10px;
    align-items: center;
    position: relative;
    padding: 20px;
    border-radius: 10px;
`


const Xbutton = styled.button`
    background-color: white;
    border: none;
    margin-left: auto;
    text-size: medium;
`

const Title = styled.h3`
    text-align:center;
`

const Description = styled.h5`
    text-align:center;
`


export {LuckyCards, Container, Xbutton, Title, Description, Modal, Backdrop}