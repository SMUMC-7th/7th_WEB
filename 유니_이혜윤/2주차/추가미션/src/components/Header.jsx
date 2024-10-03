import styled from 'styled-components';

const Container = styled.div`
    height: 10vh;
    background-color: #F1F0EF;

    display: flex;
    align-items: center;
    padding: 20px;

    border-bottom: 0.5px solid #ddd;
`;

const Header = () => {
    return (
        <Container>
            <h3>🍀 혜콩 blog</h3>
        </Container>
    )
}

export default Header;