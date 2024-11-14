import * as S from './search.style';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import MovieCard from '../../components/movieCard/movieCard';
import Error from '../../components/error/error';
import Loading from '../../components/loading/loading';
import { getSearchMovie } from '../../apis/movie';

const Search = () => {
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

    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchMovieWithKeyboard = (e) => {
        if (e.key === 'Enter') {
            handleSearchMovie();
        }
    };

    const handleSearchMovie = () => {
        if (mq !== searchValue) {
            setSearchParams({ mq: searchValue });
            navigate(`/search?mq=${searchValue}`);
        }
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ['searchMovie', mq],
        queryFn: () => getSearchMovie(mq, 1),
        enabled: !!mq,
    });

    if (error) {
        console.error('Error fetching data:', error);
        return <Error />;
    }

    return (
        <S.Container>
            <S.Search>
                <S.SearchBox
                    placeholder="영화 제목을 입력해주세요..."
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    onKeyDown={handleSearchMovieWithKeyboard}
                />
                <S.Button onClick={handleSearchMovie}>검색</S.Button>
            </S.Search>
            <S.MovieCardList>
                {isLoading ? (
                    <Loading />
                ) : (
                    data?.results.map((movie) => (
                        <MovieCard key={movie.id} {...movie} />
                    ))
                )}
            </S.MovieCardList>
        </S.Container>
    );
};

export default Search;
