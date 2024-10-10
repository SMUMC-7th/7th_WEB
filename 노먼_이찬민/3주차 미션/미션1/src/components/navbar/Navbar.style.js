import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  background-color: #2a2a2a;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  width: 20%;
  display: flex;
  color: #fd4963;
  img {
  }
  section {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
  }
`;

const RightBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  gap: 10px;
`;

const RightBoxButton = styled.button`
  background-color: ${(props) =>
    props.type === "login" ? "black" : "#fd4963"};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export { Container, LeftBox, RightBox, RightBoxButton };
