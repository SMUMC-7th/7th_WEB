import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 300px;
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    z-index: 3;
    border-bottom: 1px solid #202020;

    @media (max-width: 1080px) {
        height: auto;
    }
    img {
        position: absolute;
        right: 0px;
        width: 50%;
        height: 300px;
        object-fit: cover;
        @media (max-width: 1080px) {
            width: 100%;
            position: relative;
        }
    }
`;

const Backdrop = styled.div`
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1) 55%,
        rgba(0, 0, 0, 0.6) 60%,
        rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
    @media (max-width: 1080px) {
        background: rgba(0, 0, 0, 0.5);
    }
`;

const Texts = styled.div`
    margin-left: 20px;
    height: 300px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
    gap: 3px;
    flex-wrap: wrap;
    position: relative;
    @media (max-width: 1080px) {
        height: auto;
        margin-top: 10px;
        width: 100%;
        margin-left: 0;
    }
`;

const Title = styled.div`
    display: block;
    width: 100%;
    color: white;
    font-size: 35px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    @media (max-width: 1080px) {
        width: 100%;
        font-size: 25px;
    }
`;

const Text = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    max-width: 100vw;
    color: #babac1;
    font-size: 14px;
    flex-wrap: wrap;
    max-height: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 1080px) {
        /* width: 100vw; */
    }
`;

const Tagline = styled.div`
    display: flex;
    max-width: 100%;
    color: white;
    font-size: 20px;
    margin: 5px 0;
    font-style: italic;
`;

const Button = styled(Link)`
    text-decoration: none;
    border-radius: 10px;
    width: 60px;
    height: 20px;
    background-color: purple;
`;

const Alert = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
    height: 300px;
`;
export { Container, Title, Texts, Backdrop, Text, Tagline, Button, Alert };
