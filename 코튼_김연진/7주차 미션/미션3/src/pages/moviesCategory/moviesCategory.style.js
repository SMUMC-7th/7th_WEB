import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const MovieCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 20px;
    gap: 20px;
    margin: 30px;
`;

const Buttons = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
`;

const Button = styled.button`
    background-color: ${(props) => (props.disabled ? 'white' : '#FF1E9D')};
    border: none;
    width: 80px;
    height: 30px;
    font-size: 15px;
    border-radius: 10px;
`;

export { Container, MovieCardList, Buttons, Button };
