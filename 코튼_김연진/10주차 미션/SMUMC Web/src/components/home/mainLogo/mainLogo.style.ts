import styled, { keyframes } from 'styled-components';
interface ContainerProps {
    islight: boolean;
}
const fadeIn = keyframes`
    0% {
        transform: translateX(-20px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const Main = styled.div<ContainerProps>`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 70px 100px;
    flex-wrap: wrap;
    gap: 30px;
    background-color: ${(props) =>
        props.islight ? 'rgba(17, 115, 57, 0.1)' : '#272727'};
    img {
        margin: 0 30px;
        max-width: 400px;
        min-width: 300px;
        height: auto;
        object-fit: contain;
        flex-shrink: 1;
    }
`;

const Texts = styled.div`
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;

    flex-shrink: 1;
`;

const Title = styled.div<ContainerProps>`
    display: flex;
    font-size: 4rem;
    font-weight: 900;
    color: #117339;
    margin-bottom: 15px;
    justify-content: center;
    span {
        color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
    }
`;

const Span = styled.span<{ $delay: number }>`
    opacity: 0;
    display: inline-block;
    animation: ${fadeIn} 0.5s forwards;
    animation-delay: ${({ $delay }) => $delay}s;
`;

const Text = styled.div<ContainerProps>`
    display: flex;
    font-size: 1.5rem;
    margin-top: 10px;
    font-weight: 600;
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
`;

export { Container, Main, Texts, Title, Text, Span };
