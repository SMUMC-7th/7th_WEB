import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';

interface ContainerProps {
    islight: boolean;
}
interface DropdownProps {
    islight: boolean;
    isopen: boolean;
}
interface ButtonProps {
    islight: boolean;
    isclicked: boolean;
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div<ContainerProps>`
    display: flex;
    font-size: var(--size-title);
    font-weight: var(--weight-title);
    color: ${(props) => (props.islight ? 'black' : '#e0e0e0')};
    margin-bottom: 20px;
`;

const Members = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 50rem;
    justify-content: center;
    margin-bottom: 20px;
    gap: 10px;
`;

const SubTitle = styled.div<ContainerProps>`
    display: flex;
    font-size: 30px;
    font-weight: 600;
    justify-content: center;
    color: ${(props) => (props.islight ? 'black' : '#e0e0e0')};
    margin: 20px 0;
`;
const Nav = styled.div`
    display: flex;
    margin-bottom: 20px;
    gap: 40px;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button<ButtonProps>`
    font-size: 1.5rem;
    border: none;
    color: ${({ isclicked, islight }) =>
        isclicked ? 'var(--color-green-main)' : islight ? 'black' : '#e0e0e0'};
    background-color: ${(props) => (props.islight ? '#ffffff' : '#272727')};
    text-decoration: ${(props) => (props.isclicked ? 'underline' : 'none')};
    text-underline-offset: 6px;
    font-weight: 600;
    line-height: 35px;
`;

const Select = styled.button<ContainerProps>`
    margin: 20px 0;
    width: 10rem;
    height: 2.5rem;
    border-radius: 5px;
    background-color: ${(props) => (props.islight ? '#fff' : '#272727')};
    color: ${(props) => (props.islight ? '#272727' : '#ffffff')};
    border: ${(props) =>
        props.islight ? '1px solid #272727' : '1px solid #ffffff'};
    position: relative;
`;

const Option = styled.li<DropdownProps>`
    display: ${(props) => (props.isopen ? 'block' : 'none')};
    font-size: 16px;
    color: ${(props) => (props.islight ? '#333' : '#fff')};
    background-color: ${(props) => (props.islight ? '#f9f9f9' : '#333')};
    padding: 10px;
    border: none;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${(props) => (props.islight ? '#f0f0f0' : '#444')};
        color: ${(props) => (props.islight ? '#272727' : '#e0e0e0')};
    }

    &:focus {
        outline: none;
        background-color: ${(props) => (props.islight ? '#e0e0e0' : '#555')};
        color: ${(props) => (props.islight ? '#272727' : '#fff')};
    }
`;

const Options = styled.div`
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    z-index: 10;
`;
const ArrowDown = styled(RiArrowDownSLine)<ContainerProps>`
    position: absolute;
    top: 10px;
    left: 130px;
    width: 20px;
    height: 20px;
    color: ${(props) => (props.islight ? 'black' : '#e0e0e0')};
`;

export {
    Container,
    Title,
    Members,
    SubTitle,
    Nav,
    Button,
    Select,
    Option,
    Options,
    ArrowDown,
};
