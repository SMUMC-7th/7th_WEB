import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 30px;
`;
const P = styled.p`
  min-height: 685px;
`;

const Footer = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 15%;
  hr {
    width: 100%;
  }

  div {
    display: flex;
    width: 100vw;
    padding: 0px 22%;
    justify-content: space-between;
    margin: 20px;
  }
  button {
    width: 200px;
    height: 50px;
    font-size: 18px;
    border-color: red;
    border-radius: 5px;
  }
`;

export { Section, P, Footer };
