import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 35%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 120px;
  border-radius: 60px;
`;
const Name = styled.div`
  font-size: 1.5rem;
`;
const Description = styled.div`
  font-size: 1rem;
`;
const LuckButton = styled.div`
  background-color: #111111;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  width: 100px;
  cursor: pointer;
`;

export { Container, Image, Name, Description, LuckButton };
