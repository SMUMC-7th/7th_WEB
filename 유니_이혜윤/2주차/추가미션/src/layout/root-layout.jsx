import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 800px;
`;

const SidebarContainer = styled.div`
  width: 25%;

  @media (min-width: 1200px) {
    width: 25%;
  }
`;

const CardsContainer = styled.div`
  width: 70%;
`;

const FooterWrapper = styled.footer`
  height: 5vh;
  background-color: #ddd;
  color: #000;
  font-size: 12px;

  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px;

  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FixedIcon = styled.a`
  position: fixed;
  bottom: 10px;
  right: 10px;

  &:hover {
    color: black;
  }
`;

const Icon = styled(FaGithub)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Content id="modal-root">
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <CardsContainer>
          <Outlet />
        </CardsContainer>
      </Content>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
      <FixedIcon href="https://github.com/hyeyoon23" target="_blank">
        <Icon />
      </FixedIcon>
    </Container>
  );
};

export default RootLayout;
