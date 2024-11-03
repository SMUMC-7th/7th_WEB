import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-auto-rows: 240px;
    margin: 10px;
    gap: 10px;
`;

export { Container };
