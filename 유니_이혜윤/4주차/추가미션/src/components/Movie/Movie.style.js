import styled from "styled-components";

const MovieWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  cursor: pointer;
  padding: 10px;

  border: 3px solid #2a2d31;
  border-radius: 10px;

  img {
    border-radius: 5px;
    width: 180px;
    height: 275px;
  }

  h3 {
    font-size: 15px;
    padding-top: 3px;
    color: white;
  }

  p {
    font-size: 11px;
    color: #ddd;
  }
`;

const HoverMovie = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;

export { MovieWrapper, HoverMovie };
