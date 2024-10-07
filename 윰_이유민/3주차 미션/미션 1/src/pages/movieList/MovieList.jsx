
import MovieCard from "../../components/movieCard/MovieCard.jsx";
import * as S from "./MovieList.style.js"

import {useEffect, useState} from "react";
import axios from "axios";

const MoviesPage = ({category}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=ko&page=1`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNkYWIyMDkxMzI2Y2Y3NTkwNTAwYjQyODNkNjZkNyIsIm5iZiI6MTcyNjE0MTU3Ny42MDM2ODcsInN1YiI6IjY0MzVmY2Y2NjUxZmNmMDBkM2RhYzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cFPsPRHPidq2OnJ3U-3wHJYhnGajDFqUsM8XJ_a_0bw`
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


