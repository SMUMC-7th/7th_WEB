import * as S from "./MovieLIst.style.js";
import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "../../components/MovieCard/MovieCard";

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?language=ko&page=1`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        }
      );
      setMovies(movies);
    };
    getMovies();
  }, [category]);

  return (
    <S.Container>
      {movies.data?.results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </S.Container>
  );
};

export default MovieList;
