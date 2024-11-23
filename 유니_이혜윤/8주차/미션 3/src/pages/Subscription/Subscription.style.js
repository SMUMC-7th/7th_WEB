import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
`;

const PlanContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Plan = styled.div`
  width: 250px;
  height: 300px;
  padding: 20px;
  border: 2px solid ${(props) => (props.selected ? "#F2085A" : "gray")};
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "#ffe6e6" : "#f9f9f9")};
  color: ${(props) => (props.selected ? "#000" : "#999")};
  cursor: pointer;
  text-align: center;
`;

const Price = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Amount = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Feature = styled.p`
  font-size: 14px;
  margin: 15px 0;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 520px;
  height: 40px;

  margin: 30px;
  border: none;
  border-radius: 10px;
  background-color: #ccc;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #f2085a;
  }
`;

export {
  Container,
  Title,
  Subtitle,
  PlanContainer,
  Plan,
  Price,
  Amount,
  Feature,
  Button,
};
