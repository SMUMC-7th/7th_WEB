
import MovieCard from "../../components/movieCard/MovieCard.jsx";
import * as S from "./MovieList.style.js"

import {useEffect, useState} from "react";
import axios from "axios";

const MoviesPage = ({category}) => {
    const [movies, setMovies] = useState([])
    const token = import.meta.env.VITE_API_KEY

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=ko&page=1`, {
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


