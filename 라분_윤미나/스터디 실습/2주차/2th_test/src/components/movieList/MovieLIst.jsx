import * as S from './MovieLIst.style.js';
import {MOVIES} from '../../mocks/movies.js';
import MovieCard from '../Movecard/MoveCard.jsx';


const MovieList =() => {

    return <S.Container>
        {MOVIES.results.map((movie) => <MovieCard key={movie.id} {...movie}/>)}
    </S.Container>
}

export default MovieList;