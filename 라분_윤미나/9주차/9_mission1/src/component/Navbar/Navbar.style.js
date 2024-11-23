import styled from "styled-components";

const Nav_Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(67, 67, 255);
  padding: 20px 15%;
  color: white;
`;
const Nav_Container = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
`;
const Amount_Container = styled.div`
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: rgb(156, 156, 218);
  border-radius: 10px;
  position: absolute;
  top: -5px;
  right: -5px;
`;
const Total_Amount = styled.p``;

export { Nav_Center, Nav_Container, Amount_Container, Total_Amount };
