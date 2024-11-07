import styled from "styled-components";

const Container = styled.div``;
const Button = styled.button`
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
  height: ${(props) => props.height};
  border: none;
  padding: 0 10px;
`;
export { Container, Button };
