import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    position: absolute;
    z-index: 101;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    display: flex;
    position: relative;
    z-index: 102;
`;

const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    position: absolute;
    z-index: 100;
`;

export { Container, Backdrop, Modal };
