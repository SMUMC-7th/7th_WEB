import styled from 'styled-components';

interface ContainerProps {
    islight: boolean;
}
const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: ${(props) => (props.islight ? '#ffffff' : '#272727')};
`;

const Main = styled.main<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 22rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => (props.islight ? '#ffffff' : '#272727')};
`;

const Text = styled.div<ContainerProps>`
    display: flex;
    color: ${(props) => (props.islight ? '#000000' : '#ffffff')};
    align-items: center;
`;
const Span = styled.span`
    font-size: 30px;
    margin-right: 10px;
`;

export { Container, Main, Text, Span };
