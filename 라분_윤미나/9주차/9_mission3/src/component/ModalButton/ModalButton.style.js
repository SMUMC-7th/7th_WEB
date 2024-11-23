import styled from "styled-components";

const Btn_Container = styled.div`
  display: flex;
  gap: 50px;

  button:nth-of-type(1) {
    width: 60px;
    height: 30px;
    border-radius: 10px;
    border-color: red;
  }
  button:nth-of-type(2) {
    width: 60px;
    height: 30px;
    border-radius: 10px;
    border-color: blue;
  }
`;

export default Btn_Container;
