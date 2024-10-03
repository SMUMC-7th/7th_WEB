import * as S from './home.style'
import MovieCard from '../../components/movieCard/movieCard'
import {useEffect, useState} from "react";
import axios from "axios";

const HomePage = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`/api/3/movie/popular?language=en-US&page=1`, { //CORS 문제 해결
                headers: {
                    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmRjODM2Y2I2NDkzODI1ZTY3NTE4YWM2YzIyZTk0ZCIsIm5iZiI6MTcyNzkzMzY1OS45NzAzMDksInN1YiI6IjY2ZmUyNmY3Zjg3OGFkZmVkMDg0ZDE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xJQF-PgzAhlQIKZPUssGvkFViuKZ5zmz_gQP-A2PuF0'
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
