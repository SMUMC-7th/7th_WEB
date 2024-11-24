import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 30px;
    z-index: 100;
`;
const YesButton = styled.button`
    background-color: #ffffff;
    padding: 3px 10px;
    border-radius: 5px;
    border: 1px solid gray;
`;

const NoButton = styled.button`
    background-color: #ffffff;
    padding: 3px 10px;
    border-radius: 5px;
    border: 1px solid red;
    color: red;
`;
export { Container, YesButton, NoButton };
