import * as S from './movieList.style';
import MovieListCard from '../movieListCard/movieListCard';

const MovieList = ({ movieIdList, setMovieIdList }) => {
    const deleteCard = (movieIdToDelete) => {
        const storedList = JSON.parse(localStorage.getItem('movieId'));
        const updatedList = storedList.filter(
            (movieId) => movieId !== movieIdToDelete,
        );
        localStorage.setItem('movieId', JSON.stringify(updatedList));
        setMovieIdList(updatedList);
    };
    return (
        <S.Container>
            {movieIdList.map((movieId, idx) => (
                <MovieListCard
                    key={idx}
                    movieId={movieId}
                    onClick={() => deleteCard(movieId)}
                />
            ))}
        </S.Container>
    );
};

export default MovieList;
