import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/Card/MovieCard"
import * as S from "./HomePage.styled";
const HomePage = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODQ1ODExOC4zMTY5MDEsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MUKXDJxxkKCWfd2ezPrlQislHTnb0myZBDIRGRHEg-I',
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);
    // console.log(movies.data.results);
    
    return (
        <S.Container>
            {movies.data?.results.map((movie, _) => {
                return <MovieCard key={movie.id} {...movie}/>
            })}
        </S.Container>
    )
    
}
export default HomePage;