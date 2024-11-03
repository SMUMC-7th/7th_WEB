import * as S from './moviesCategory.style';
import { useParams } from 'react-router-dom';
import MovieList from '../../components/movieList/movieList';

const MoviesCategory = () => {
    const { category } = useParams();
    return (
        <S.Container>
            <MovieList
                url={`/movie/${category}?language=ko&page=1`}
            ></MovieList>
        </S.Container>
    );
};

export default MoviesCategory;
