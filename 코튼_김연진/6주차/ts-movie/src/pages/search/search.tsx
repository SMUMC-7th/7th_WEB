/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from './search.style';
import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { SearchMovieList } from '../../components/searchMovieList/searchMovieList';
import { KeyboardEvent } from 'react';
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const [searchParams, setSearchParams] = useSearchParams({
        mq: '',
    });

    const mq = searchParams.get('mq');

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`);
    };
    const handleSearchMovieWithKeyboard = (
        e: KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === 'Enter') {
            handleSearchMovie();
        }
    };
    console.log('검색결과 값: ', searchValue);

    return (
        <S.Container>
            <S.Search>
                <S.SearchBox
                    placeholder="영화 제목을 입력해주세요..."
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    onKeyDown={handleSearchMovieWithKeyboard}
                ></S.SearchBox>
                <S.Button onClick={handleSearchMovie}>검색</S.Button>
            </S.Search>
            <SearchMovieList></SearchMovieList>
        </S.Container>
    );
};

export default Search;
