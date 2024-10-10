import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;

  width: 500px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  gap: 15px;

  img {
    width: 150px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    margin: 10px 0;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }

  span {
    font-size: 10px;
    color: #888;
  }
`;

export { Container, TextContainer };
