import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 150px;
    border-radius: 5px;
`;

export { Container, Modal };
