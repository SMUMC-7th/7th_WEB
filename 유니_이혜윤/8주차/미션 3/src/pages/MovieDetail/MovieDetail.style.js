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

const VideoIcon = styled.div`
  position: fixed;
  top: 10%;
  right: 0;
  width: 50px;
  cursor: pointer;
  font-size: 30px;
`;

const VideoModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  padding: 10px;
  border-radius: 10px;
  z-index: 1000;

  button {
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: black;
    color: white;
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

export { DetailContainer, TopWrapper, BottomWrapper, VideoIcon, VideoModal };
