import styled from 'styled-components';
import { Link } from 'react-router-dom';
interface ContainerProps {
    islight: boolean;
}
const Footer = styled.footer`
    display: flex;
    height: 3rem;
    align-items: center;
    justify-content: space-between;
    padding: 25px 5px;
    color: grey;
`;

const Logo = styled(Link)<ContainerProps>`
    display: flex;
    align-items: center;
    height: 100%;
    width: 8rem;
    font-size: 1.2rem;
    text-decoration: none;
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};

    font-weight: 700;
    margin-left: 20px;
    img {
        width: 45px;
        margin-right: 5px;
    }

    @media (max-width: 440px) {
        font-size: 0;
        width: 6rem;
        justify-content: space-between;
    }
`;

const Buttons = styled.div<ContainerProps>`
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: ${(props) => (props.islight ? '#ffffff' : '#272727')};
    justify-content: space-between;
    box-sizing: border-box;
    margin-right: 20px;
    @media (max-width: 440px) {
        width: 100%;
        justify-content: space-between;
    }
`;

const Button = styled(Link)<ContainerProps>`
    text-decoration: none;
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
`;
const ATag = styled.a<ContainerProps>`
    text-decoration: none;
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
`;
export { Footer, Logo, Buttons, Button, ATag };
