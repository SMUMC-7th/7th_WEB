import { styled } from 'styled-components';

const Section = styled.section`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 40px 0;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const TotalPriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ResetButton = styled.button`
  width: 200px;
  height: 40px;
  font-weight: 600;
  background-color: white;
  border: solid 2px red;
  border-radius: 10px;
  color: red;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const EmptyContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
`;

export { Section, ItemContainer, Footer, TotalPriceContainer, ResetButton, EmptyContainer };
