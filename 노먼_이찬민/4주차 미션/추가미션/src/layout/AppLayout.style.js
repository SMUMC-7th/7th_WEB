import styled from "styled-components";

const AppContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const OutletWrapper = styled.div`
  width: 100%;
  /* flex-grow: 1; // 남은 공간 알아서 차지함 */
  overflow-y: auto;
  background-color: #111111;
  color: white;
`;

export { AppContainer, OutletWrapper };
