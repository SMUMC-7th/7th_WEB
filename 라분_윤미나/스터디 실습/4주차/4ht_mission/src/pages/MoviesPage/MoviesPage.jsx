import MoviesList from "../../components/MovieList/MovieList";
import MyList from "../../components/MyList/MyLIst";
import * as S from "./MoviesPage.style";
import { useState } from "react";

const MoviesPage = () => {
  const [myMovies, setMyMovies] = useState([]);
  return (
    <S.Container>
      <MoviesList myMovies={myMovies} setMyMovies={setMyMovies} />
      <MyList myMovies={myMovies} setMyMovies={setMyMovies} />
    </S.Container>
  );
};

export default MoviesPage;
