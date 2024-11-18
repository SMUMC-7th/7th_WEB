import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/Card/MovieCard"
import * as S from '../homePage/HomePage.styled'
import useCustomFetch from "../../hooks/useCustomFetch";
import { MovieCardContainer } from "../search/Search.styled";
import CardListSkeleton from "../../components/Skeleton/card-list-skeleton";


const UpComing = () => {
    const {data:movies, isLoading, isError} = useCustomFetch(`3/movie/upcoming?language=ko`);
    if(isLoading){
        return (
            <S.Container>
                <MovieCardContainer>
                    <CardListSkeleton num={20}/>
                </MovieCardContainer>
            </S.Container>
        )
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