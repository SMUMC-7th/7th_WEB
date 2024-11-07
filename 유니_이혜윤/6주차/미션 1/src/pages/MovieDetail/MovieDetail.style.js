import styled from "styled-components";

const DetailContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const TopWrapper = styled.div`
  height: 45vh;
  padding: 20px;

  background-image: linear-gradient(to right, black, transparent),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;

  h1 {
    padding-bottom: 10px;
  }

  h3,
  h4,
  h6 {
    padding-bottom: 6px;
    font-weight: normal;
  }

  p {
    font-size: 13px;
    width: 40%;
    height: 160px;
    overflow-y: scroll;
  }
`;

const BottomWrapper = styled.div`
  padding: 20px;
`;

export { DetailContainer, TopWrapper, BottomWrapper };
