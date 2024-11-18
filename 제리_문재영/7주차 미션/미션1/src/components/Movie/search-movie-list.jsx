import * as S from "../../pages/search/Search.styled";
import useCustomFetch from "../../hooks/useCustomFetch";
import MovieCard from "../Card/MovieCard"
import { useSearchParams } from "react-router-dom";
import CardSkeleton from "../Skeleton/card-skeleton";
import CardListSkeleton from "../Skeleton/card-list-skeleton";

const SearchMovieList = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        mq: ''
    })

    const mq = searchParams.get('mq')

    const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`
    const {data:movies, isLoading, isError} = useCustomFetch(url);
    // console.log(movies);

    if (!isLoading){
        return (
            <S.MovieCardContainer>
                <CardListSkeleton num={20}/>
            </S.MovieCardContainer>
        )
    }
    // 200*286,15,10 총 200*320 여백포함하면350

    if (mq && movies.data?.results.length === 0) {
        return (
            <S.MovieCardContainer>
                <h1 style={{color:'white', textAlign: 'center'}}>{mq} 같은건 없음</h1>
            </S.MovieCardContainer>
        )
    }

    return(
        <S.MovieCardContainer>
            {movies.data?.results.map((movie, _) => {
                return <MovieCard key={movie.id} {...movie}/>
            })}
        </S.MovieCardContainer>
    )
}
export default SearchMovieList;