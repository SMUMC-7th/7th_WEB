import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 80px;
    overflow-y: hidden;
    overflow-x: hidden;
    align-items: center;
`;

const Button = styled.button`
    background-color: rgba(94, 94, 94, 0.5);
    width: 180px;
    height: 45px;
    color: white;
    border-radius: 30px;
    border: none;
    font-weight: 500;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--color-green-main);
        height: 60px;
        border-radius: 50px;
    }
`;

const Banner = styled.div`
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 200px;
    margin-right: 5px;
`;

export { Button, Container, Banner };
