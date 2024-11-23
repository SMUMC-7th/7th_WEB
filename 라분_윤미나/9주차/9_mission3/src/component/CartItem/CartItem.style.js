import styled from "styled-components";

const Cart_Item = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 20px;

  img {
    width: 100px;
    height: 100px;
  }
  div {
    flex-direction: column;
  }
  div:nth-of-type(1) {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Item_Price = styled.h4`
  color: gray;
`;

const Amount_Btn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: white;
`;
const Amount = styled.p`
  font-size: 18px;
`;

export { Cart_Item, Item_Price, Amount_Btn, Amount };
