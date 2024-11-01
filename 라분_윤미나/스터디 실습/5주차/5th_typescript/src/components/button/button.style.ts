import styled from "styled-components";

const ButtonStyle = styled.button<{
  background: "white" | "skyblue" | "blue";
  radius: string;
  height: string;
}>`
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
  height: ${(props) => props.height};

  width: 100%;
  padding: 5px;
  border: none;
`;

const Container = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;
export { ButtonStyle, Container };
