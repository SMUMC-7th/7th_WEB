import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const Img = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    position: relative;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 30px;
    }
`;

const Overlay = styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0%;
    border-radius: 30px;
    transition: opacity 0.3s ease;
    gap: 15px;
    @media (max-width: 768px) {
        gap: 10px;
    }
    &:hover {
        opacity: ${(props) => (props.isActive ? '90%' : '0%')};
    }
`;
const Title = styled.div`
    display: flex;
    color: white;
    justify-content: center;
    font-size: 30px;
    height: 30px;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const Text = styled.div`
    justify-content: center;
    display: flex;
    color: white;
    font-size: 15px;
    height: 20px;
    font-weight: 600;
    max-width: 80%;
    margin-bottom: 15px;
    word-break: break-all;
`;

const Names = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    width: 80%;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        gap: 5px;
    }
`;
const Name = styled.div`
    display: flex;
    font-size: 15px;
    color: white;
    width: 90px !important;
    justify-content: center;
`;

const Stacks = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

const Stack = styled.div`
    display: flex;
    background-color: var(--color-green-main);
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 3px 10px;
    font-size: 15px;
    width: 60px !important;
`;
export { Container, Img, Overlay, Title, Text, Names, Name, Stacks, Stack };
