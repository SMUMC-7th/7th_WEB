import styled from 'styled-components';

interface ContainerProps {
    isVisible: boolean;
}

interface isLightProps {
    islight: boolean;
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
    width: 100%;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) =>
        props.isVisible ? 'translateY(-50px)' : 'translateY(0px)'};

    transition: opacity 1.5s ease, transform 1.5s ease;
`;

const Title = styled.div<isLightProps>`
    display: flex;
    font-weight: 900;
    font-size: var(--size-title);
    margin-bottom: 20px;
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
`;

const Text = styled.div<isLightProps>`
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 400;
    align-items: center;
    margin: 3px;
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
`;

export { Container, Title, Text };
