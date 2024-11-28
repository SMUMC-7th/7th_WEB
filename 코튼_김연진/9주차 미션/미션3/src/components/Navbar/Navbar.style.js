import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 80%;
    padding: 15px 10px;
    justify-self: center;
`;
const Logo = styled.div`
    display: flex;
    font-size: 25px;
    color: white;
    font-weight: 700;
    align-items: center;
`;
const ShoppingCart = styled.div`
    display: flex;
    margin-left: auto;
    align-items: center;
    position: relative;
    svg {
        color: white;
        width: 30px;
        height: 30px;
    }
`;

const AmountContainer = styled.div`
    display: flex;
    border-radius: 100%;
    background-color: #79acf3;
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 15px;
    bottom: 12px;
`;

const TotalAmount = styled.p`
    color: #ffffff;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 14px;
`;
export { Container, Logo, ShoppingCart, AmountContainer, TotalAmount };
