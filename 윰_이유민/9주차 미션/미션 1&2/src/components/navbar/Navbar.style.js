import { styled } from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #03c75a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const CountBedge = styled.p`
  position: absolute;
  background-color: red;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
`;

export { Nav, Container, CartContainer, CountBedge };
