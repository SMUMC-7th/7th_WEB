import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    height: 150px;
    width: 110px;

    position: relative;

    margin-bottom: 5px;

    img {
        height: 80px;
        width: 80px;
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
    justify-content: center;
    text-align: center;
    align-items: center;
    font-weight: bold;
`;

const Role = styled.div`
    display: flex;
    width: 110px;
    color: #c0c0c0;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    text-align: center;
    white-space: wrap;
`;

export { Container, Role, Name };
