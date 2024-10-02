import { useState } from "react";
// import Counter from "./components/counter/Counter";
import styled from "styled-components";
import { MOVIES } from "./mocks/movies";
import MovieList from "./components/movieList/MovieList";

const Container = styled.div``;

function App() {
  return (
    <>
      <MovieList />
    </>
  );
}

export default App;
