import { useSearchParams } from 'react-router-dom';
import * as S from './searchMovieList.style';
import MovieList from '../movieList/movieList.js';

const SearchMovieList = () => {
    const [searchParams, setSearchParams] = useSearchParams({ mq: '' });
    const mq = searchParams.get('mq') || '';
    return (
        <S.Container>
            <MovieList
                url={`/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`}
                mq={mq}
            ></MovieList>
        </S.Container>
    );
};

export { SearchMovieList };
