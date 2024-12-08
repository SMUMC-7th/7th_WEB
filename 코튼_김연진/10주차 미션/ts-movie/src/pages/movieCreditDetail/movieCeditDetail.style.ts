import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;
const Member = styled.div`
    display: flex;
    width: 100%;
    color: black;
    font-size: 12px;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
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
export { Container, Member, Alert };
