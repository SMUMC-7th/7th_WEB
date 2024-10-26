import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/Card/MovieCard"
import * as S from "./HomePage.styled";
import { axiosInstance } from "../../apis/axios-instance";

import useCustomFetch from "../../hooks/useCustomFetch";


const HomePage = () => {
    const {data: movies, isLoading, isError} = useCustomFetch(`/discover/movie`)
    // console.log('rufrhk',movies.data?.results[0].id);
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
export default HomePage;
