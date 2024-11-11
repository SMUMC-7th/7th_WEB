import * as S from './moviesCategory.style';
import { useParams } from 'react-router-dom';
import MovieCard from '../../components/movieCard/movieCard';
import { getCategoryMovie } from '../../apis/movie';

import Error from '../../components/error/error';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/loading/loading';

const MoviesCategory = () => {
    const { category } = useParams();

    const { data, error, isLoading } = useQuery({
        queryKey: ['categoryMovies', category],
        queryFn: () => getCategoryMovie(category || '', 1),
        enabled: !!category,
    });

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        console.log('에러 발생:', error);
        return <Error message="영화를 가져오는 중에 문제가 발생했습니다." />;
    }

    if (!data) {
        console.log('데이터가 없습니다');
        return <Error message="해당 카테고리의 영화 데이터가 없습니다." />;
    }

    return (
        <S.Container>
            <S.MovieCardList>
                {data.results.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </S.MovieCardList>
        </S.Container>
    );
};

export default MoviesCategory;
