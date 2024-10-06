import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 20vh;
  display: flex;
  border: 1px solid black;
  cursor: pointer;
`;
const Image = styled.div`
  width: 20%;
  background: ${(props) =>
    props.url ? `url(${props.url}) no-repeat center 100%` : "none"};
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;

const Title = styled.div`
  margin-bottom: 0.5rem;
`;
const Content = styled.div`
  margin-bottom: 4.5rem;
`;
const Date = styled.div`
  font-size: 0.7rem;
`;

export { Container, Image, RightBox, Title, Content, Date };
