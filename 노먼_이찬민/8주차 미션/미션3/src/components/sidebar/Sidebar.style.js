import styled from "styled-components";

const Container = styled.div`
  width: 15%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: aliceblue;
  background-color: #222222;
  color: white;
  font-size: 1.1rem;
`;

const MenuList = styled.ul`
  height: 80%;
  list-style: none;
  li {
    display: flex;
    gap: 5px;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }

    span {
      position: relative;
      /* top: 2px; */
      font-size: 1.3rem;
    }
  }
`;

export { Container, MenuList };
