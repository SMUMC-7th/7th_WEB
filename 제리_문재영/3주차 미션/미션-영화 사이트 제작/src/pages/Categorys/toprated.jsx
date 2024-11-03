import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/Card/MovieCard"
import * as S from '../homePage/HomePage.styled'


const TopRated = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200', {
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
export default TopRated;