import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

const Title = styled.h1`
    color: white;
`

const Input = styled.input`
    width: 400px;
    height: 50px;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
`
const Button = styled.button`
    width: 400px;
    height: 50px;
    border: none;
    border-radius: 10px;
    box-sizing:content-box; //input과 같은 크기의 버튼을 갖게 하기 위해 필요
    background-color: deeppink;
    color: white;
    font-weight: bold;
    font-size: 16px;
    // font: bold 16px; <- 이건 적용이 안 되네요ㅠ //https://www.tcpschool.com/css/css_basic_fonts#google_vignette
`

const Error = styled.p`
    color: red;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export {Title, Input, Container, Error, Form, Button}