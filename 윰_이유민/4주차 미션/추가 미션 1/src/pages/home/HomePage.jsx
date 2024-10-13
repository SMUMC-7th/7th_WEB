import { MovieList } from "../../components/movieList/MovieList";
import { MyMovieList } from "../../components/myMovieList/MyMovie";
import * as S from "./HomePage.style"

const HomePage = () => {
  
  return (
    <S.Container>
      <MovieList />
      <MyMovieList />
    </S.Container>
  );
};

export default HomePage;
