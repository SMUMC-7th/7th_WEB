import styled from 'styled-components';
interface ContainerProps {
    islight: boolean;
}
const Container = styled.div<{ isVisible: boolean }>`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) =>
        props.isVisible ? 'translateY(-50px)' : 'translateY(0px)'};
    transition: opacity 1s ease, transform 1s ease;
`;
const Info = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    padding: 70px 0;
    gap: 30px;
`;

const Title = styled.div<ContainerProps>`
    font-size: 3.5rem;
    font-weight: var(--weight-title);
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
`;

const Tags = styled.div<ContainerProps>`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    div {
        background-color: ${(props) =>
            props.islight ? 'rgba(94, 94, 94, 0.2)' : 'rgba(94, 94, 94, 1)'};
        color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
    }
`;

const Tag = styled.div`
    display: flex;
    background-color: rgba(94, 94, 94, 0.2);
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
`;

const Cards = styled.div<ContainerProps>`
    display: flex;
    width: 90%;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    div {
        background-color: ${(props) =>
            props.islight ? 'rgba(255, 255, 255, 1)' : '#e0e0e0'};
    }
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 20rem;
    height: 19rem;
    margin-top: 10px;
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Explain = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
    color: black;
`;

const Number = styled.div`
    font-weight: 900;
    font-size: 4rem;
    color: black;
`;
export { Container, Info, Title, Tags, Card, Cards, Tag, Explain, Number };
