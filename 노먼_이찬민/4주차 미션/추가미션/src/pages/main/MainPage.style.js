import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBox = styled.div`
  margin-top: 4rem;
  width: 70%;
  height: 8%;
  display: flex;
  justify-content: center;
  gap: 0.8rem;

  button {
    border-radius: 20px;
    height: 2.5rem;
    height: ${(props) => {
      if (props.size === "large") {
        return "4rem";
      } else if (props.size === "mid") {
        return "3rem";
      } else if (props.size === "normal") {
        return "2rem";
      }
    }};
    padding: 0 10px;
    border: none;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export { Container, ButtonBox };
