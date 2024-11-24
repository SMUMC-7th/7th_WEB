import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentEnd = styled.div`
  width: 10px;
  height: 40px;
`;

const PagenationBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background-color: #fd4963;
    color: #fff;
    cursor: pointer;
    outline: none;
    border-radius: 8px;

    &:disabled {
      background-color: #000;
      pointer-events: none;
      cursor: none;
    }
  }
`;

const MovieList = styled.div`
  width: 98%;
  /* height: 100%; */
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(120px, 1fr)
  ); // 140px, 3fr 과 동일
  /* grid-template-rows: repeat(3, 200px); */
  grid-auto-rows: 200px; // row 수 자동 계산
  gap: 10px;
  margin-top: 20px;
`;

export { Container, ContentEnd, PagenationBar, MovieList };
