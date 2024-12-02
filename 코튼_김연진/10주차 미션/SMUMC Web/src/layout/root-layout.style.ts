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
    background-color: ${(props) => (props.islight ? '#ffffff' : '#272727')};
`;

const Main = styled.main<ContainerProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    margin-top: 80px;
    background-color: ${(props) => (props.islight ? '#ffffff' : '#272727')};
`;

export { Container, Main };
