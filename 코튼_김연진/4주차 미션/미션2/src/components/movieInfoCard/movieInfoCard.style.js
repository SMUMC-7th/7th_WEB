import styled from "styled-components";
import {Link} from "react-router-dom"

const Container = styled.div`
    height: 300px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    z-index: 3;
`;

const Backdrop = styled.div`
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* 왼쪽은 검정색 불투명, 오른쪽은 투명 */
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0) 100%);
    z-index: 1;
`;

const Texts = styled.div`
    margin-left: 20px;
    height: 300px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2; /* z-index 설정: Backdrop 위에 위치 */
    gap: 3px;
`;

const Title = styled.div`
    display: block;
    width: 100%;
    color: white;
    font-size: 30px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const Text = styled.div`
    display: flex;
    max-width: 100%;
    color: white;
    font-size: 14px;
    flex-wrap: wrap;
`;

const Tagline = styled.div`
    display: flex;
    max-width: 100%;
    color: white;
    font-size: 20px;
    margin: 5px 0;
    font-style: italic;
`;


const Alert = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
`   
const Button = styled(Link)`
    text-decoration: none;
    border-radius: 10px;
    width: 60px;
    height: 20px;
    background-color: purple;
`
export { Container, Title, Texts, Backdrop, Text, Tagline, Alert, Button };