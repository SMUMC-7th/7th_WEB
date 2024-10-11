import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 20px;
`;

const Member = styled.div`
    display: flex;
    width: 100%;
    color: black;
    font-size: 12px;
    flex-wrap: wrap;
    gap: 10px;
`;

const Title = styled.div`
    margin: 25px;
    display: block;
    width: 130px;
    color: white;
    font-size: 30px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const Alert = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
`;

export { Container, Title, Member, Alert };
