import * as S from './home.style'
import MovieCard from '../../components/movieCard/movieCard'
import {useEffect, useState} from "react";
import axios from "axios";

const HomePage = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`/api/3/movie/popular?language=ko&page=1`, { //CORS 문제 해결
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
                } 
            })
            setMovies(movies);
        }
        getMovies()
    }, []);

    return <S.Container>
            {movies.data?.results.map((movie, _) => { //?: optional changing
            console.log(_);
            return <MovieCard key={movie.id} {... movie}/>
            })}
    </S.Container>
}

export default HomePage;
