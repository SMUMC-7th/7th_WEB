import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "../components/MovieCard/MovieCard";
import { Container } from "../components/MovieList/MovieLIst.style";

const UpComing = () => {
  const [movies, setMovies] = useState([]);
  //const KEY = "f10e917c16478eb971d456287f903be2";

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?language=ko-US&page=1`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTBlOTE3YzE2NDc4ZWI5NzFkNDU2Mjg3ZjkwM2JlMiIsIm5iZiI6MTcyNzkxNTI3NC44ODk0NTksInN1YiI6IjY2ZmRlMTJlYzlhMTBkNDZlYTdjNzE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kah-5eppVB0Rky76P_zLaeHLixUTjF-en-nKI_oaZbI`,
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

export default UpComing;
