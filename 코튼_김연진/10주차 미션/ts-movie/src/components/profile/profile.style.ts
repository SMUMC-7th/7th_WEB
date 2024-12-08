import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 100px;
    width: 200px;
    position: relative;
    margin-bottom: 5px;

    img {
        max-height: 60px;
        max-width: 60px;
        min-height: 60px;
        min-width: 60px;
        object-fit: cover;
        border-radius: 100%;
        border-inline: 0.5px solid white;
    }
`;

const Name = styled.div`
    display: flex;
    width: 110px;
    color: white;
    font-size: 14px;

    align-items: center;
    font-weight: bold;
`;

const Role = styled.div`
    display: flex;
    width: 110px;
    color: #c0c0c0;
    font-size: 12px;
    align-items: center;
    white-space: wrap;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
`;

export { Container, Role, Name, Text };
