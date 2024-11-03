import styled from "styled-components";
import tempImage from "./tomato.jpg"
import { Link } from 'react-router-dom';

const Header = styled.header`
    display: flex;
    height: 60px;
    align-items: center;
    font-weight: bold;
`
const Image = styled.div`
    height: 40px;
    width: 40px; /* 이미지 크기 명시적으로 지정 */
    background-image: url(${tempImage});
    background-size: cover; /* 이미지가 영역에 맞도록 조정 */
    background-position: center;
`

const Container = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration-line: none;
    color: black;
    height: 60px;
`

export {Header, Image, Container}