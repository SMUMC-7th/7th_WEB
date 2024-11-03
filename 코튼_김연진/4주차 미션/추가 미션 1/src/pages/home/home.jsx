import * as S from './home.style';
import Movies from '../../components/movies/movies';
import { useState } from 'react';
import MovieList from '../../components/movieList/movieList';

const HomePage = () => {
    const [movieIdList, setMovieIdList] = useState(
        JSON.parse(localStorage.getItem('movieId')) || [],
    );

    const createList = () => {
        let newList = [];
        localStorage.setItem('movieId', JSON.stringify(newList));
        setMovieIdList(newList);
    };

    const deleteList = () => {
        localStorage.removeItem('movieId');
        setMovieIdList([]);
    };

    const fetchList = () => {
        const storedList = JSON.parse(localStorage.getItem('movieId')) || [];
        setMovieIdList(storedList);
    };

    return (
        <S.Container>
            <S.Title>Movies</S.Title>
            <Movies setMovieIdList={setMovieIdList} movieIdList={movieIdList} />
            <S.Title>MY MovieList</S.Title>
            <S.Buttons>
                <S.Button onClick={createList} to={'/'}>
                    만들기
                </S.Button>
                <S.Button onClick={fetchList} to={'/'}>
                    가져오기
                </S.Button>
                {localStorage.getItem('movieId') && (
                    <S.Button to={'/'} onClick={deleteList}>
                        삭제하기
                    </S.Button>
                )}
            </S.Buttons>
            {localStorage.getItem('movieId') && (
                <MovieList
                    movieIdList={movieIdList}
                    setMovieIdList={setMovieIdList}
                />
            )}
            {movieIdList <= 0 && localStorage.getItem('movieId') && (
                <S.Text>아직 담은 영화가 없습니다</S.Text>
            )}
        </S.Container>
    );
};

export default HomePage;
