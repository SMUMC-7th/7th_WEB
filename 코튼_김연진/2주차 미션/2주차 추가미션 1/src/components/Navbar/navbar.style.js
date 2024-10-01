import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 400px
    align-items: center;
    position: relative;
    cursor: pointer;
    margin-left: 10px;
`

const DropdownContent = styled.div`
    display: flex;
    position: absolute;
    z-index: 1;
    flex-direction: column;
    top: 25px;
    gap: 5px;
`

const Toggle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-weight: bold;
`
const Button = styled.a`
    border: none;
    background-color: white;
    width: 100px;
    cursor: pointer;
    &:hover {
        background-color: #f1f1f1;
    }
`

export {Container,Toggle, Button, DropdownContent}