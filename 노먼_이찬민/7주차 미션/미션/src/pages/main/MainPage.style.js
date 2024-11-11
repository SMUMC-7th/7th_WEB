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
  height: 10px;
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

export { Container, ContentEnd, PagenationBar };
