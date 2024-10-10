import styled from "styled-components"
import {Link} from "react-router-dom"
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const Title = styled.div`
    display: flex;
    color: white;
    margin-top: 40px;
    font-size: 25px;
`

const Button = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: white;
`
const Buttons = styled.div`
    display: flex;
    gap : 30px;
    margin-top: 50px;
`
export {Container, Title, Button, Buttons}