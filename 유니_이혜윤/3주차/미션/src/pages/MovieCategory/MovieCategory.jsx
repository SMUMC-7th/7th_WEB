import * as C from "./MovieCategory.style";
import { Link } from "react-router-dom";

const MovieCategory = () => {
  return (
    <C.Container>
      <p>카테고리</p>
      <C.CategoryBox>
        <Link to="/movies/now-playing">
          <C.Box>
            <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D" />
            <span>현재 상영중인</span>
          </C.Box>
        </Link>

        <Link to="/movies/popular">
          <C.Box>
            <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <span>인기있는</span>
          </C.Box>
        </Link>

        <Link to="/movies/top-rated">
          <C.Box>
            <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <span>높은 평가를 받은</span>
          </C.Box>
        </Link>

        <Link to="/movies/up-coming">
          <C.Box>
            <img src="https://images.unsplash.com/photo-1523207911345-32501502db22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmllfGVufDB8fDB8fHww" />
            <span>개봉 예정중인</span>
          </C.Box>
        </Link>
      </C.CategoryBox>
    </C.Container>
  );
};

export default MovieCategory;
