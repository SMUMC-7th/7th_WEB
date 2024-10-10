import styled from "styled-components";

const Container = styled.section`
  display: flex;
  margin-bottom: 50px;
  gap: 30px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
      border-radius: 15px;
    }
  }
`;
export { Container };
