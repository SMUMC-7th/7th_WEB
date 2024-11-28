import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/Card/MovieCard"
import * as S from '../homePage/HomePage.styled'
import { useGetInfiniteMovies } from "../../hooks/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import { MovieCardContainer } from "../search/Search.styled";
import CardListSkeleton from "../../components/Skeleton/card-list-skeleton";
import GridLoader from 'react-spinners/GridLoader';
const NowPlaying = () => {
    // // const {data:movies, isLoading, isError} = useCustomFetch(`/movie/now_playing?language=ko-KRS&page=2`);

    // const {data:movies,isPending, isError} = useQuery({
    //     queryFn: () => useGetMovies({category: 'now_playing', pageParam: 1}),
    //     queryKey: ['movies', 'now_playing'],
    //     cacheTime: 10000,
    //     staleTime: 10000,
    // })
    // ispending: 데이터를 불러오는 중, 데이터가 로딩 중일때 ispending이 true
    // isloading: 데이터를 불러오는 중 || 재시도 중 일때 true가 된다
    
    const {
        data:movies,  
        isFetching, 
        hasNextPage, 
        isPending, 
        fetchNextPage, 
        isFetchingNextPage, 
        error, 
        isError
    } = useGetInfiniteMovies('now_playing');
    
    const {ref, inView} = useInView({
        threshold: 0,
        // delay: 0,
    })
    
    useEffect(() => {
        if (inView) {
            !isFetching && hasNextPage && fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);
    // console.log('d',movies);
    
    
    
    // if(isPending){
    //     return (
    //         <S.Container>
    //             <MovieCardContainer>
    //                 <CardListSkeleton num={20}/>
    //             </MovieCardContainer>
    //         </S.Container>
    //     )
    // }
    if (isError){
        return <div><h1 style={{color:"white"}}>에러발생</h1></div>
    }
    
    return (
        <S.Container>
            {movies?.pages.map((page) => {
                return page.results.map((movie, idx) => {
                    return <MovieCard key={movie.id} {...movie}/>
                })
            })}
            <div ref={ref}>
            {isFetching && <CardListSkeleton num={10}/>}
            <GridLoader color={'#fff'} size={'70px'}/>
            </div>
            
        </S.Container>
        
    )
}

export default NowPlaying;