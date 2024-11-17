import { useState } from 'react';
import * as S from './Search.styled'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch'
import MovieCard from '../../components/Card/MovieCard';
import SearchMovieList from '../../components/Movie/search-movie-list';

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
        // console.log("asdf"); 
    }
    const handleSearchMovieKeyboard = (e) => {
        if (e.key === 'Enter'){
            handleSearchMovie();
        }
    }

    
    
    return (
        <S.Container>
            <S.SearchInputContainer>
                <input 
                    placeholder='영화 제목을 입력해주세요...'
                    value={searchValue} 
                    onKeyDown={handleSearchMovieKeyboard} 
                    onChange={onChangeSearchValue}/>
                <button onClick={handleSearchMovie}>검색</button>
            </S.SearchInputContainer>
            <SearchMovieList/>

        </S.Container>
    )
}

export default Search;