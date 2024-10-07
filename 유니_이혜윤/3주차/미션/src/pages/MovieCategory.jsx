import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  padding-top: 20px;
  gap: 20px;

  img {
    width: 270px;
    height: 180px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Box = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 1;

    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
  }
`;

const MovieCategory = () => {
  return (
    <Container>
      <p>카테고리</p>
      <CategoryBox>
        <Link to="/movies/now-playing">
          <Box>
            <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D" />
            <span>현재 상영중인</span>
          </Box>
        </Link>

        <Link to="/movies/popular">
          <Box>
            <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <span>인기있는</span>
          </Box>
        </Link>

        <Link to="/movies/top-rated">
          <Box>
            <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <span>높은 평가를 받은</span>
          </Box>
        </Link>

        <Link to="/movies/up-coming">
          <Box>
            <img src="https://images.unsplash.com/photo-1523207911345-32501502db22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmllfGVufDB8fDB8fHww" />
            <span>개봉 예정중인</span>
          </Box>
        </Link>
      </CategoryBox>
    </Container>
  );
};

export default MovieCategory;
