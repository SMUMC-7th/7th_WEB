import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const NavbarWrapper = styled.div`
  width: 100%;
  position: sticky; /* Navbar 최상단에 고정 */
  top: 0;
  z-index: 1000;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #131517;
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: #000;
  color: #fff;
  overflow-y: auto;
  padding-bottom: 30px;
`;

export {
  LayoutContainer,
  NavbarWrapper,
  MainWrapper,
  SidebarWrapper,
  ContentWrapper,
};
