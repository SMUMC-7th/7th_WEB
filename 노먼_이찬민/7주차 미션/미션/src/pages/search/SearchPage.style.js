import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  position: relative;
  left: 5%;
`;

const SearchInput = styled.input`
  width: 400px;
  padding: 10px;
  margin: 30px 20px;
`;

export { Container, SearchInput };
