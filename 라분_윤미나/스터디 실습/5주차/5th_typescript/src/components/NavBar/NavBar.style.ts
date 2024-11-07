import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
const Span = styled.span`
  color: white;
`;
const Nav_Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 60px;
  align-items: center;
  span {
    color: white;
  }
`;
export { Nav, Nav_Container, Span };
