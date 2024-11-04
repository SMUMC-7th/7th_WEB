import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 20px 0;

  display: flex;
  justify-content: center;

  input {
    width: 90%;
    height: 40px;
    margin-left: 10px;
    padding: 0 10px;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  button {
    width: 5%;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #f2085a;
    color: white;
  }
`;

export { SearchContainer };
