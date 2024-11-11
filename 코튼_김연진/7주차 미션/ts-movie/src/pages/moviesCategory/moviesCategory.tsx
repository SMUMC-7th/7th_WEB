import * as S from './moviesCategory.style';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import MovieCard from '../../components/movieCard/movieCard';

import {
    getCategoryMovie,
    TMovieSingleResponse,
    TMovieTotalResponse,
} from '../../apis/movie';
import { AxiosError } from 'axios';

const MoviesCategory = () => {
    const { category } = useParams<{ category: string }>();
    const [page, setPage] = useState(1);

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
    }: UseQueryResult<TMovieTotalResponse, AxiosError> = useQuery({
        queryKey: ['categoryMovies', category, page],
        queryFn: () => getCategoryMovie(category || '', page),
        enabled: !!category,
    });

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        console.log('에러 발생:', error);
        return <Error />;
    }

    if (!data) {
        console.log('데이터가 없습니다');
        return <Error />;
    }

    return (
        <S.Container>
            <S.MovieCardList>
                {data.results.map((movie: TMovieSingleResponse) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </S.MovieCardList>

            <S.Buttons>
                <S.Button
                    onClick={() => setPage((old) => Math.max(old - 1, 1))}
                    disabled={page === 1 || isFetching}
                >
                    이전
                </S.Button>
                <div style={{ color: 'white' }}>{page} 페이지</div>
                <S.Button
                    onClick={() => {
                        if (!isFetching && data.page < data.total_pages) {
                            setPage((old) => old + 1);
                        }
                    }}
                    disabled={
                        isFetching || page === data.total_pages || isFetching
                    }
                >
                    다음
                </S.Button>
            </S.Buttons>
        </S.Container>
    );
};
export default MoviesCategory;
