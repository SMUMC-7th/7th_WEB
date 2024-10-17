import { useEffect, useState } from 'react';
import * as S from './MovieList.styled'
import axios from 'axios'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({setMyList}) => {
    const [movies,setMovies] = useState('');
    
    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0',
                    }
                })               
                // console.log("1",movies.data.results); 
                setMovies(movies)
        }
        getMovies()
    }, []);
     
    const addMovie = async() => { //리스트에 아이템 넣기
        const movieAddList = await axios.post(`https://api.themoviedb.org/3/list/${list_id}/add_item`,{
            media_id: id
        },{
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0'
                },
            }
        )
        setMyList(prevList => [
            ...prevList,{
                img_path, title, id}
        ]);
    }
    // const addMovieInMyList = () => { ...addMovieInMyList,
    //     {movies.id, movies.poster_path, movies.title}
    // }
    // console.log("마이리스트영화",addMovieInMyList);
        
    // const getMyMovie = async() => { //리스트안에 담겨있는 아이템 목록 가져오기
    //     const myMovie = await axios.get(`https://api.themoviedb.org/3/list/${list_id}`,{
    //         headers: {
    //             accept: 'application/json',
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0'
    //             }
    //     })
    //     console.log("gjgj",myMovie);   
    // }
    
    return(
        <S.Container>
            <S.Title>Moives</S.Title>
            <S.MoviesList>
                {movies?.data?.results.map((item,_) => {
                    return <MovieCard onClick = {addMovie} key={item.id} {...item}/>
                })}
            </S.MoviesList>
        </S.Container>
    )
}

export default MovieList;