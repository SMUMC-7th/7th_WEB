import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-auto-rows: 240px;
    margin: 10px;
    gap: 10px;
`;
const Text = styled.div`
    margin-top: 30px;
    color: white;
    font-size: 30px;
`;
export { Container, Text };
