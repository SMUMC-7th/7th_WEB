import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  background-color: #111111;
  color: white;
`;

const SideBox = styled.div`
  flex-basis: 15%;
`;
const OutletWrapper = styled.div`
  flex-grow: 1; // 남은 공간 알아서 차지함
  overflow-y: auto;
`;

export { AppContainer, MainContainer, SideBox, OutletWrapper };
