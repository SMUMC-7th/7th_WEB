
import MovieCard from "../../components/movieCard/MovieCard.jsx";
import * as S from "./MovieList.style.js"

import {useEffect, useState} from "react";
import axios from "axios";

const MoviesPage = ({category}) => {
    const [movies, setMovies] = useState([])
    const token = import.meta.env.VITE_TMDB_TOKEN
    const api = import.meta.env.VITE_MOVIE_API_URL

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`${api}/movie/${category}?language=ko&page=1`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);


   return <S.Container>
      {movies.data?.results.map((movie, _) => {
        return <MovieCard key={movie.id} movie={movie} />
      }
      )}
    </S.Container>
};

export default MoviesPage;


