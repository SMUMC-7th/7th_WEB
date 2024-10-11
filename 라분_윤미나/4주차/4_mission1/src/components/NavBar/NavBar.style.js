import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 20px;
  }

  button {
    width: 90px;
    height: 40px;
    border: none;

    &: hover {
      background-color: rgb(255, 0, 119);
      border-radius: 10px;
    }
  }
`;
/*
const LinkLink = styled.Link`
  color: "white";
  fontsize: "17px";
`;
*/
export { Nav };
