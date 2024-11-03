import styled from "styled-components";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  margin-top: 10px;
  text-align: center;

  width: 100px;

  h5 {
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #aaa;
  }
`;

export { Profile, ImageWrapper, Info };
