import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: relative;
    gap: 20px;
    img {
        width: 245px;
        height: 130px;
        border-radius: 10px;
        object-fit: cover;
    }
`;

const Text = styled.div`
    background-color: black;
    color: white;
    opacity: 0.5;
    z-index: 1;
    position: absolute;
    bottom: 10px;
    left: 10px;
`;

const StyledLink = styled(Link)`
    display: flex;
`;

export { Container, Text, StyledLink };
