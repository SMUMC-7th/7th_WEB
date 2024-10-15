import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    width: 90px;
    height: 160px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    border: 1px solid grey;
    position: relative;
    img {
        width: 90px;
        border-radius: 10px;
        height: 130px;
    }
`;
const Backdrop = styled.div`
    width: 90px;
    height: 160px;
    border-radius: 10px;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
`;

const Title = styled.div`
    color: white;
    font-size: 10px;
    text-align: center;
    margin-top: 10px;
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Img = styled.img`
    width: 300px;
`;

const Alert = styled.div`
    display: flex;
`;
export { Container, Title, Img, Alert, Backdrop };
