import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CiLight, CiDark } from 'react-icons/ci';
interface ContainerProps {
    islight: boolean;
}
const Container = styled.nav<ContainerProps>`
    display: flex;
    height: 5rem;
    padding: 24px;
    align-items: center;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    left: 0;
    right: 0;
    box-sizing: border-box;
    background-color: ${(props) => (props.islight ? '#ffffff' : '#272727')};
    z-index: 1;
`;

const Logo = styled(Link)<ContainerProps>`
    display: flex;
    align-items: center;
    height: 100%;
    width: 8rem;
    font-size: 1.2rem;
    text-decoration: none;
    color: black;
    font-weight: 700;
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
    img {
        width: 45px;
        margin-right: 5px;
    }
    @media (max-width: 440px) {
        font-size: 0;
        width: 4rem;
    }
`;

const Buttons = styled.div`
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;

    @media (max-width: 440px) {
        width: 100%;
        justify-content: space-between;
    }
`;

const Button = styled(Link)<ContainerProps>`
    text-decoration: none;
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
`;

const Light = styled(CiLight)`
    width: 20px;
    height: 20px;
    stroke: white;
    stroke-width: 1;
`;

const Dark = styled(CiDark)`
    width: 20px;
    height: 20px;
    stroke: black;
    stroke-width: 1;
`;

export { Container, Logo, Buttons, Button, Light, Dark };
