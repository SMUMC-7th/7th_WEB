import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 90px;
    align-items: center;
    img {
        width: 90px;
        height: 90px;
    }
`;
const Img = styled.img`
    width: 40px;
    height: 40px;
`;

const Info = styled.div`
    display: flex;
    margin-left: 10px;
    flex-direction: column;
`;

const TitleSinger = styled.div`
    display: flex;
    gap: 10px;
`;

const Price = styled.div`
    display: flex;
    margin-top: 5px;
    color: gray;
`;

const Button = styled.button`
    background-color: #ffffff;
    border: none;
    svg {
        z-index: 1;
        color: black;
        width: 15px;
        height: 15px;
    }
`;

const Buttons = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    p {
        margin: 5px 0;
    }
`;
export { Container, Img, Info, TitleSinger, Price, Button, Buttons };
