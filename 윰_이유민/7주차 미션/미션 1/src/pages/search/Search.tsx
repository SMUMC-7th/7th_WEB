import { SearchBar } from '../../components/serchBar/SearchBar';
import * as S from './Search.style';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from '../../components/movieList/MovieList';
import { axiosInstance } from '../../apis/axios-instance';
import { useQuery } from '@tanstack/react-query';

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

  const errorBox = () => (
    <S.ErrorBox>
      <h3>검색어 {mq}에</h3>
      <h3>해당하는 데이터가 없습니다.</h3>
    </S.ErrorBox>
  );
  const getMovieSearchData = async () => {
    const { data } = await axiosInstance.get(url);
    return data;
  };

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery<Movies>({
    queryKey: ['movieSearchData', mq],
    queryFn: getMovieSearchData,
    enabled: !!mq,
  });

  console.log(isError);

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
