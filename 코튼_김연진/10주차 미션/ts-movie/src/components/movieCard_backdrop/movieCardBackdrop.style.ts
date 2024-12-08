import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
    width: 270px;
    height: 140px;
    position: relative;
    text-decoration: none;
    img {
        width: 270px;
        height: 140px;
        border-radius: 10px;
        object-fit: cover;
    }
`;

const Backdrop = styled.div`
    width: 270px;
    height: 140px;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
`;

const Title = styled.div`
    display: block;
    width: 80%;
    color: white;
    opacity: 1;
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: 1;
    position: absolute;
    top: 70px;
    left: 10px;
`;

const Rate = styled.div`
    display: flex;
    color: white;
    font-size: 13px;
    z-index: 1;
    position: absolute;
    top: 95px;
    left: 10px;
`;

const Release = styled.div`
    display: flex;
    color: white;
    font-size: 13px;
    z-index: 1;
    position: absolute;
    top: 115px;
    left: 10px;
`;

export { Container, Backdrop, Title, Release, Rate };
