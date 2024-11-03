import * as S from './home.style';
import MovieList from '../../components/movieList/movieList.jsx';
const HomePage = () => {
    return (
        <S.Container>
            <MovieList url={'/movie/popular?language=ko&page=1'}></MovieList>
        </S.Container>
    );
};

export default HomePage;
