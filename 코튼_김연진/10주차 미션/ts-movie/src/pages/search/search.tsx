import * as S from './search.style';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MovieCard from '../../components/movieCard/movieCard';
import Error from '../../components/error/error';
import Loading from '../../components/loading/loading';
import { TMovieSingleResponse } from '../../apis/movie';
import useGetSearchMovies from '../../hooks/queries/useGetSearchMovies';

const Search = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchValue, setSearchValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const mq = searchParams.get('mq') || '';

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchValue.trim()) {
                setSearchParams({ mq: searchValue });
                navigate(`/search?mq=${searchValue}`);
            }
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [searchValue, navigate, setSearchParams]);

    const { data, error, isLoading } = useGetSearchMovies(mq);

    if (isLoading) {
        return <Loading />;
    }

    if (error && mq) {
        console.log('데이터가 없습니다');
        return <Error />;
    }

    return (
        <S.Container>
            <S.MovieCardList>
                {data?.results.map((movie: TMovieSingleResponse) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </S.MovieCardList>
        </S.Container>
    );
};

export default Search;
