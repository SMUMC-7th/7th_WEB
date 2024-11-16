import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  margin: 20px 0;

  display: flex;
  justify-content: center;

  input {
    flex: 1;
    width: 90%;
    height: 40px;
    margin-left: 20px;
    padding: 0 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    outline: none;
  }

  button {
    width: 70px;
    height: 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: none;
    background-color: #f2085a;
    color: white;
    margin-right: 20px;
  }
`;

const MovieGridContainer = styled.div`
  margin: 0 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 20px;
`;

const NoSearch = styled.div`
  text-align: center;
  margin-top: 30px;
  color: white;
`;

export { SearchContainer, MovieGridContainer, NoSearch };
