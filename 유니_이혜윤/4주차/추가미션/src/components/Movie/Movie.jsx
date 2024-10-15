import { useState } from "react";
import * as C from "./Movie.style";
import axios from "axios";

const Movie = ({ movie, onAddMovie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const session_id = localStorage.getItem("session_id");
  const list_id = localStorage.getItem("list_id");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddMovie = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/list/${list_id}/add_item?session_id=${session_id}`,
      {
        media_id: movie.id,
      },
      {
        headers: {
          Authorization: `Bearer ` + import.meta.env.VITE_MOVIE_TOKEN,
        },
      }
    );
    // console.log(listMovie);
    console.log("리스트추가");
    onAddMovie(movie);
  };

  return (
    <C.MovieWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleAddMovie}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      {isHovered && <C.HoverMovie></C.HoverMovie>}
    </C.MovieWrapper>
  );
};

export default Movie;
