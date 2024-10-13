import * as S from './movieCard.style';
import { useState } from 'react';
const MovieCard = ({ title, poster_path, id, setMovieIdList }) => {
    const [ishovered, setIsHovered] = useState(false);
    const handleAddMovie = () => {
        if (localStorage.getItem('movieId')) {
            let storedMovieIdList = JSON.parse(localStorage.getItem('movieId'));

            if (!storedMovieIdList.includes(id)) {
                const updatedList = [...storedMovieIdList, id];
                setMovieIdList(updatedList);
                localStorage.setItem('movieId', JSON.stringify(updatedList));
            } else {
                alert('이미 리스트에 추가된 영화입니다.');
            }
        } else {
            alert('리스트를 먼저 만들어주세요');
        }
    };

    return (
        <S.Container
            onClick={handleAddMovie}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {ishovered && <S.Backdrop />}
            <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt="포스터 이미지"
            />
            <S.Title>{title}</S.Title>
        </S.Container>
    );
};

export default MovieCard;
