import styled from "styled-components";

const SearchContainer = styled.div`
  margin: 0 30px;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 60px;
`;
const Input = styled.input`
  flex: 1;
  height: 40px;
  background-color: white;
  border-radius: 10px 0 0 10px;
  border: none;
`;
const Button = styled.button`
  width: 100px;
  height: 42px;
  border-radius: 0 10px 10px 0;
  background-color: rgb(255, 0, 119);
  color: white;
  cursor: pointer;
  border: none;
`;
const MovieContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
export { SearchContainer, Container, Input, Button, MovieContainer };
