import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";
import { Container } from "./Movies.style";

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?include_adult=false&include_video=false&&language=ko-KR&page=1`,
        {
          headers: {
            Authorization: `Bearer ` + import.meta.env.VITE_MOVIE_TOKEN,
          },
        }
      );
      setMovies(movies);
    };
    getMovies();
  }, [category]);

  return (
    <Container>
      {movies.data?.results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

export default MovieList;
