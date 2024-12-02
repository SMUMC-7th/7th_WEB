import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 250px;
    height: 320px;
    border-radius: 30px;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
    background-color: #ffffff;
    &:hover {
        cursor: pointer;
        img {
            transform: scale(1.1);
            transition: ease-in 0.2s;
        }
    }
`;
const Img = styled.div`
    display: flex;
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;

    img {
        width: 100%;
        height: 100%;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        object-fit: cover;
        justify-content: flex-start;
    }
`;

const Content = styled.div`
    display: flex;
    width: 85%;
    flex-direction: column;
    gap: 7px;
    justify-content: center;
`;

const Title = styled.div`
    display: flex;
    font-size: 1.2rem;
    font-weight: 700;
`;

const Description = styled.div`
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    white-space: wrap;
    width: 100%;
    word-break: break-all;
`;

const Text = styled.div`
    margin-top: 10px;
    display: flex;
    color: var(--color-green-main);
    font-size: 1rem;
`;

export { Container, Content, Title, Description, Img, Text };
