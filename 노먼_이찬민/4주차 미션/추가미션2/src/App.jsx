import { useEffect, useState } from "react";
import "./App.css";
import * as S from "./App.style";
import Header from "./components/header/Header";
import MovieList from "./components/moviesList/MovieList";
import MyMovieList from "./components/myMovieList/MyMovieList";
import useData from "./hooks/useData";
import { authInstance } from "./api/axiosInstance";
function App() {
  const listId = localStorage.getItem("listId");
  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);

  const handleClickCard = async (movie) => {
    const listId = localStorage.getItem("listId");
    const sessionId = localStorage.getItem("sessionId");
    const { data } = await authInstance.post(
      `/3/list/${listId}/add_item?session_id=${sessionId}`,
      { media_id: movie.id }
    );

    setMyMovies((prev) => {
      console.log(prev, movie);
      return [...prev, movie];
    });
  };

  const handleClickMyCard = async (movie) => {
    console.log("들어는 옴");
    const listId = localStorage.getItem("listId");
    const sessionId = localStorage.getItem("sessionId");
    const { data } = await authInstance.post(
      `/3/list/${listId}/remove_item?session_id=${sessionId}`,
      { media_id: movie.id }
    );

    setMyMovies((prev) => {
      console.log(prev, movie);
      return prev.filter((item) => item.id !== movie.id);
    });
  };

  async function getMovies() {
    const { data } = await authInstance.get(`/3/movie/popular`);
    setMovies(data.results);
  }

  async function getMyMovies() {
    const { data } = await authInstance.get(
      `/3/list/${listId}?language="ko-KR`
    );
    setMyMovies(data.items);
  }

  useEffect(() => {
    getMovies();
    getMyMovies();
  }, []);

  return (
    <S.Container>
      <Header />
      <h1>Movies</h1>
      <MovieList movies={movies} handleClickCard={handleClickCard} />
      <h1>My MovieList</h1>
      <MyMovieList myMovies={myMovies} handleClickMyCard={handleClickMyCard} />
    </S.Container>
  );
}

export default App;
