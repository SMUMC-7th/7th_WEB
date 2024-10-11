import { styled } from "styled-components";
import { SiApplemusic } from "react-icons/si";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left: 10px;
  gap: 10px;
  background-color: #2a2a2a;
  justify-content: flex-start;
`;

const Icon = styled(SiApplemusic)`
  width: 3rem;
  height: 3rem;
  color: #fff;
  cursor: pointer;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

export { Container, Icon, Title };
