import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
    signup: string;
}

interface CategoryProps {
    isClicked: boolean;
}
const Nav = styled.nav`
    display: flex;
    min-height: 80px;
    align-items: center;
    background-color: black;
    padding: 0 20px;
    position: fixed;
    z-index: 100000;
    width: calc(100vw - 40px);
`;

const StyledLink = styled(Link)`
    display: flex;
    max-width: 100px;
    min-width: 50px;
    color: #ff1e9d;
    height: 100%;
    text-decoration-line: none;
    font-size: 1.7rem;
    font-weight: 900;
    margin-right: 30px;
    align-items: center;
    justify-content: center;
    @media (max-width: 640px) {
        margin: 0;
    }
`;

const StyledLink2 = styled(Link)`
    width: auto;
    height: 30px;
    font-size: 15px;
    color: #9f9f9f;
    text-decoration-line: none;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    align-self: center;
    position: relative;
`;
const NavButton = styled(Link)<CategoryProps>`
    width: auto;
    height: 30px;
    font-size: 19px;
    color: ${(props) => (props.isClicked ? 'white' : '#9f9f9f')};
    text-decoration: ${(props) => (props.isClicked ? 'underline' : 'none')};
    text-underline-offset: 15px;
    text-decoration-thickness: 2px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    align-self: center;

    @media (max-width: 640px) {
        display: none;
    }
`;

const Button1 = styled(Link)<ContainerProps>`
    display: flex;
    border-radius: 5px;
    width: 70px;
    height: 30px;
    border: none;
    color: white;
    align-items: center;
    justify-content: center;
    text-decoration-line: none;
    background-color: ${(props) =>
        props.signup === 'true' ? '#FF1E9D' : 'black'};
    &: hover {
        background-color: white;
        color: black;
    }
`;

const Button2 = styled.button`
    display: flex;
    border-radius: 5px;
    width: 70px;
    height: 30px;
    border: none;
    color: white;
    align-items: center;
    justify-content: center;
    background-color: black;
    &: hover {
        background-color: white;
        color: black;
    }
`;

const SearchBox = styled.input`
    position: relative;
    max-width: 200px;
    min-width: 150px;
    height: 30px;
    padding: 0;
    border-radius: 10px;
    border: none;
    padding-left: 30px;
    align-items: center;
    background-color: #363636;
    color: #7b7d84;
    font-weight: 500;
    font-size: 0.8rem;
    overflow: hidden;
`;

const Buttons1 = styled.div`
    display: flex;
    width: auto;
`;
const Buttons2 = styled.div`
    display: flex;
    gap: 10px;
    margin-left: auto;
`;

const Text = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    height: 30px;
`;

export {
    Nav,
    StyledLink,
    StyledLink2,
    Button1,
    Button2,
    Text,
    Buttons1,
    Buttons2,
    SearchBox,
    NavButton,
};
