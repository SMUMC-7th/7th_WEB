// moviesCategory.tsx
import * as S from './moviesCategory.style';
import { useParams } from 'react-router-dom';
import MovieCard from '../../components/movieCard/movieCard';
import { getCategoryMovie } from '../../apis/movie';
import { TMovieTotalResponse, TMovieSingleResponse } from '../../apis/movie';
import Error from '../../components/error/error';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/loading/loading';

const MoviesCategory = () => {
    const { category } = useParams<{ category: string }>();

    const { data, error, isLoading } = useQuery<TMovieTotalResponse>({
        queryKey: ['categoryMovies', category],
        queryFn: () => getCategoryMovie(category || '', 1),
        enabled: !!category,
    });

    if (isLoading) {
        return <Loading />;
    }

    if (!data || error) {
        console.log('데이터가 없습니다');
        return <Error />;
    }

    return (
        <S.Container>
            {data.results.map((movie: TMovieSingleResponse) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </S.Container>
    );
};

export default MoviesCategory;
