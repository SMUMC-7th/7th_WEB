import { SearchBar } from '../../components/serchBar/searchBar';
import * as S from './Search.style';
import { useState } from 'react';
import useCustomFetch from './../../hooks/useCustomFetch';
import MovieCard from './../../components/movieCard/MovieCard';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from '../../components/movieList/MovieList';

const Search = () => {
  const [searchParams] = useSearchParams();
  const mq = searchParams.get('mq') || '';

  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
  const { data: movies, isLoading, isError } = useCustomFetch(url);

  const errorBox = () => (
    <S.ErrorBox>
      <h3>검색어 {mq}에</h3>
      <h3>해당하는 데이터가 없습니다.</h3>
    </S.ErrorBox>
  );

  return (
    <S.Container>
      <SearchBar params={mq} />
      {mq ? (
        movies?.data?.results.length !== 0 ? (
          <MovieList movies={movies} />
        ) : (
          errorBox()
        )
      ) : null}
    </S.Container>
  );
};

export default Search;
