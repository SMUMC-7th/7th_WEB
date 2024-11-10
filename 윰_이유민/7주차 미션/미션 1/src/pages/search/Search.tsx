import { SearchBar } from '../../components/serchBar/SearchBar';
import * as S from './Search.style';
import useCustomFetch from '../../hooks/useCustomFetch';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from '../../components/movieList/MovieList';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

interface Movies {
  results: Movie[];
}

const Search = () => {
  const [searchParams] = useSearchParams();
  const mq = searchParams.get('mq') || '';

  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
  const { data: movies } = useCustomFetch<Movies>(url);

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
        movies?.results?.length ? (
          <MovieList movies={movies} />
        ) : (
          errorBox()
        )
      ) : null}
    </S.Container>
  );
};

export default Search;
