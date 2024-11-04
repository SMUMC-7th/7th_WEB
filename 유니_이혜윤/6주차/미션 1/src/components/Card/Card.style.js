import styled from "styled-components";

const MovieWrapper = styled.div`
  margin-top: 50px;
  position: relative;
  cursor: pointer;

  img {
    border-radius: 5px;
    width: 190px;
    height: 285px;
  }

  h3 {
    width: 190px;
    font-size: 15px;
    padding-top: 3px;
  }

  p {
    font-size: 11px;
  }
`;

const HoverMovie = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
`;

export { MovieWrapper, HoverMovie };
