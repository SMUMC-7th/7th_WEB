import { useSearchParams } from 'react-router-dom';
import * as S from './SearchMovieList.style.js';
import MovieList from '../../components/movieList/movieList.jsx';
const SearchMovieList = () => {
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams({ mq: '' });
    const mq = searchParams.get('mq');

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
