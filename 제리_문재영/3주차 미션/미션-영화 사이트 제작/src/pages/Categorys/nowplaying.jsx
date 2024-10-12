import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/Card/MovieCard"
import * as S from '../homePage/HomePage.styled'

const NowPlaying = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0',
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);
    // console.log(movies.data.results);
    // console.log("nowplaying");
    
    return (
        <S.Container>
            {movies.data?.results.map((movie, _) => {
                return <MovieCard key={movie.id} {...movie}/>
            })}
        </S.Container>
    )
}
export default NowPlaying;