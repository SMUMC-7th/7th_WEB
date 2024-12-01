import * as S from './similarMovie.style';
import MovieCard from '../movieCard/movieCard';
import ClipLoader from 'react-spinners/ClipLoader';
import Error from '../error/error';
import useGetSimilarMovie from '../../hooks/queries/useGetSimilarMovie';

const SimilarMovie = ({ id }: { id: string }) => {
    const { data, error, isLoading } = useGetSimilarMovie(id);
    if (error) {
        return <Error></Error>;
    }
    if (isLoading) {
        return (
            <S.Alert>
                <ClipLoader color="white" />
            </S.Alert>
        );
    }
    return (
        <S.Container>
            <S.Title>비슷한 영화</S.Title>
            <S.MovieList>
                {data?.results.map((movie) => (
                    <MovieCard {...movie}></MovieCard>
                ))}
            </S.MovieList>
        </S.Container>
    );
};

export default SimilarMovie;
