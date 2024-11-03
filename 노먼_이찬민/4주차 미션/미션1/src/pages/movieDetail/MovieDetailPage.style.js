import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 10px;
  height: 100%;
  gap: 10px;
`;

const TopBox = styled.div`
  width: 90%;
  height: 45%;
  background-image: url(${(props) => props.imgUrl});
  background-position-y: 70%;
  background-size: cover;
  margin-top: 20px;
`;
const TopHoverBox = styled.div`
  width: 40%;
  height: 100%;
  border-bottom: 5px solid #fff;
  padding: 10px;
  background-color: #606060;
  opacity: 0.7;
  overflow-y: auto;
`;
const ActorsBox = styled.div`
  width: 90%;
`;
const ActorsCardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: 220px; // row 수 자동 계산
  gap: 20px;
`;
const ActorsCard = styled.div`
  width: 120px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { Container, TopBox, TopHoverBox, ActorsBox, ActorsCardBox, ActorsCard };
