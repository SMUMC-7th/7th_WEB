import { useParams } from "react-router-dom"; // 추가
import MovieList from "./MovieList"; // MovieList 컴포넌트 import
import * as S from "./Movies.style";

const Movie = () => {
  const { category } = useParams(); // URL에서 카테고리 가져오기

  return (
    <S.Container>
      <MovieList category={category} /> {/* 카테고리를 MovieList에 전달 */}
    </S.Container>
  );
};

export default Movie;
