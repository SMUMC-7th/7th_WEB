import { MovieList } from "../../components/movieList/MovieList";
import { MyMovieContainer } from "../../components/myMovieContainer/MyMovieContainer";
import * as S from "./HomePage.style"

const HomePage = () => {
  
  return (
    <S.Container>
      <MovieList />
      <MyMovieContainer />
    </S.Container>
  );
};

export default HomePage;
