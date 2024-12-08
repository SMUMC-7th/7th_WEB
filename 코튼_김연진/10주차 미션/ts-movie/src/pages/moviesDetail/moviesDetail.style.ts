import styled from 'styled-components';
import { PiPlayCircleLight } from 'react-icons/pi';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

const Buttons = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button<{ isActive: boolean }>`
    width: auto;
    height: 20px;
    font-size: 17px;
    border: none;
    color: white;
    background-color: black;
    text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
    text-underline-offset: 5px;
    padding: 0 10px;
`;
const PlayButton = styled(PiPlayCircleLight)`
    color: white;
    width: 30px;
    height: 30px;

    position: absolute;
    top: 260px;
    left: 20px;
    z-index: 3;
    @media (max-width: 1080px) {
        top: 150px;
        left: 45%;
        z-index: 3;
        margin: 0;
        width: 50px;
        height: 50px;
    }
`;
export { Container, Buttons, Button, PlayButton };
