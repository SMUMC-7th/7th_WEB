import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: var(--size-title);
    font-weight: 600;
    color: var(--color-green-main);
    margin-bottom: 40px;
`;

const Contents = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
    padding: 0;
`;

export { Container, Title, Contents };
