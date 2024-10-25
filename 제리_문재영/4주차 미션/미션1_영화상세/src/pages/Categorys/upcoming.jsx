import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/Card/MovieCard"
import * as S from '../homePage/HomePage.styled'
import useCustomFetch from "../../hooks/useCustomFetch";


const UpComing = () => {
    const {data:movies, isLoading, isError} = useCustomFetch(`3/movie/upcoming`);
    if(isLoading){
        return <div>
            <h1 style={{color:"white"}}>로딩중입니다...</h1>
        </div>
    }
    if (isError){
        return <div><h1 style={{color:"white"}}>에러발생</h1></div>
    }
    
    return (
        <S.Container>
            {movies.data?.results.map((movie, _) => {
                return <MovieCard key={movie.id} {...movie}/>
            })}
        </S.Container>
    )
}
export default UpComing;