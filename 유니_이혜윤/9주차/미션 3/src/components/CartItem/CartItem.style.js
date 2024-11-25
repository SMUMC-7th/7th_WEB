import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemBox = styled.div`
  width: 2000px;
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: auto;
    margin-right: 20px;
  }

  h4 {
    margin: 0;
    font-size: 15px;
  }

  p {
    margin: 5px 0;
    color: #555;
    font-size: 13px;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  button {
    width: 20px;
    height: 20px;
    border: none;
    background-color: white;
    color: #999;
    cursor: pointer;
    margin: 3px 0;
    font-size: 15px;

    &:hover {
      color: #0056b3;
    }
  }

  p {
    margin: 0;
    width: 30px;
    text-align: center;
    font-size: 12px;
  }
`;

export { ItemContainer, ItemBox, Button };
