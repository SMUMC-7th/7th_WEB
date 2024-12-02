import styled from 'styled-components';

interface ContainerProps {
    isVisible: boolean;
}

interface TitleProps {
    islight: boolean;
}

const Container = styled.div<ContainerProps>`
    display: flex;
    margin: 100px 0;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) =>
        props.isVisible ? 'translateY(-50px)' : 'translateY(0px)'};

    transition: opacity 1.5s ease, transform 1.5s ease;
`;

const Title = styled.div<TitleProps>`
    margin-bottom: 50px;
    font-size: var(--size-title);
    font-weight: var(--weight-title);
    word-break: keep-all;
    text-align: center;
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
    span {
        color: var(--color-green-main);
    }
`;

const Content = styled.div<TitleProps>`
    word-break: keep-all;
    padding: 15px 35px;
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${(props) => (props.islight ? '#ffffff' : '#e0e0e0')};
    font-size: 1.4rem;
    font-weight: 400;
    width: 70%;
    height: 22rem;
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Buttons = styled.div`
    justify-content: center;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

const Button = styled.button<TitleProps>`
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    ${(props) => (props.islight ? '#ffffff' : '#e0e0e0')};
    color: #000000;
    font-size: 25px;
    font-weight: 400;
    padding: 10px 20px;
    border-radius: 30px;
    &.selected {
        background-color: rgba(17, 115, 57, 0.7);
        color: white;
    }
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
`;

export { Container, Title, Content, Buttons, Button };
