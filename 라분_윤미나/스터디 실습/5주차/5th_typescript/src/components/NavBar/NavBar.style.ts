import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 20px;
    margin: 0 60px;
  }

  button {
    width: 90px;
    height: 40px;
    border: none;

    &: hover {
      background-color: rgb(255, 0, 119);
      border-radius: 10px;
      span {
        background-color: rgb(255, 0, 119);
      }
    }
  }
`;

export { Nav };
