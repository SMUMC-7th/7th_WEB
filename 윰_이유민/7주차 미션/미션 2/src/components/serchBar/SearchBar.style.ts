import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: white;
  font-size: 14px;
  color: black;
  padding: 0 14px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  width: 100px;
  height: 100%;
  background-color: red;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

export { Container, Input, SearchBtn };
