import styled from 'styled-components';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
interface ContainerProps {
    islight: boolean;
}
const Container = styled.li`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    list-style: none;
    position: relative;
`;

const Question = styled.div<ContainerProps>`
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    width: 85%;
    color: ${(props) => (props.islight ? 'black' : '#e0e0e0')};
`;

const AnswerContainer = styled.div<{ isOpen: boolean }>`
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform-origin: top;
    transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')};
    transition: opacity 0.2s ease-in, transform 0.2s ease-in;
    overflow: hidden;
    padding: ${({ isOpen }) => (isOpen ? '10px' : '0 10px')};
`;

const Answer = styled.p<ContainerProps>`
    font-size: 16px;
    margin: 0;
    color: ${(props) => (props.islight ? 'black' : '#e0e0e0')};
`;

const ArrowDown = styled(RiArrowDownSLine)<ContainerProps>`
    position: absolute;
    right: 5px;
    top: 10px;
    width: 20px;
    height: 20px;
    color: ${(props) => (props.islight ? 'black' : '#e0e0e0')};
`;

const ArrowUp = styled(RiArrowUpSLine)<ContainerProps>`
    position: absolute;
    right: 5px;
    top: 10px;
    width: 20px;
    height: 20px;
    color: ${(props) => (props.islight ? 'black' : '#e0e0e0')};
`;

export { Container, Question, AnswerContainer, Answer, ArrowDown, ArrowUp };
