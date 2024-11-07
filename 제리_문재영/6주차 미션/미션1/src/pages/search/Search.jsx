import { useState } from 'react';
import * as S from './Search.styled'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch'
import MovieCard from '../../components/Card/MovieCard';

const Search = () => {
    const [searchValue, setSearchValue] = useState();
    const navigate = useNavigate();

    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value)
    }
    const [searchParams, setSearchParams] = useSearchParams({
        mq: ''
    })

    const mq = searchParams.get('mq')

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`)
        console.log("asdf");
    }
    const handleSearchMovieKeyboard = (e) => {
        if (e.key === 'Enter'){
            handleSearchMovie();
        }
    }
    const url = `/search/movie?query=${searchValue}include_adult=false&language=ko-KR&page=1`
    const {data:movies, isLoading, isError} = useCustomFetch(url);
    console.log(movies);
    
    
    return (
        <S.Container>
            <input 
                placeholder='영화 제목을 입력해주세요...'
                value={searchValue} 
                onKeyDown={handleSearchMovieKeyboard} 
                onChange={onChangeSearchValue}/>
            <button onClick={handleSearchMovie}>검색</button>
            {/* {movies.data?.results.map((movie, _) => {
                return <MovieCard key={movie.id} {...movie}/>
            })} */}
        </S.Container>
    )
}

export default Search;