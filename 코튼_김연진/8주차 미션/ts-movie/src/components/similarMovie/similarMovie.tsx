import { getSimilarMovie } from '../../apis/movie';
import * as S from './similarMovie.style';
import { useQuery } from '@tanstack/react-query';
import { TMovieTotalResponse } from '../../apis/movie';
import MovieCard from '../movieCard/movieCard';
import ClipLoader from 'react-spinners/ClipLoader';
import Error from '../error/error';

const SimilarMovie = ({ id }: { id: string }) => {
    console.log(id);
    const { data, error, isLoading } = useQuery<TMovieTotalResponse>({
        queryKey: ['SimilarMoive', id],
        queryFn: () => getSimilarMovie(id),
        enabled: !!id,
    });
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
