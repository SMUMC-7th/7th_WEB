
import axios from "axios";
import * as S from "../movieList/MovieList.style";
import { useEffect, useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const token = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=ko&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <S.Container>
      {movies.data?.results.map((movie, _) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </S.Container>
  );
};

export default HomePage;
