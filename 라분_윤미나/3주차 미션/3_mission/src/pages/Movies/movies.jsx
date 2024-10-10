import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "../../components/MovieCard/MovieCard";
import { Container } from "../../components/MovieList/MovieLIst.style";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=ko&page=1`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTBlOTE3YzE2NDc4ZWI5NzFkNDU2Mjg3ZjkwM2JlMiIsIm5iZiI6MTcyODQzMTIzNy4yOTc4MzYsInN1YiI6IjY2ZmRlMTJlYzlhMTBkNDZlYTdjNzE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RfVza6yY6lLW_E0yIYyr7aZKMKqHjfJD8C4zb97bXwQ`,
          },
        }
      );
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <Container>
      {movies.data?.results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Container>
  );
};

export default MoviesPage;
