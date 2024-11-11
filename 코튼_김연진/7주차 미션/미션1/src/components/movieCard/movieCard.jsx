import * as S from './movieCard.style.js';
import { useState } from 'react';

import NoneImg from '../../images/img.png';
function MovieCard({ poster_path, title, release_date, id }) {
    const [ishovered, setIsHovered] = useState(false);
    return (
        <S.Container
            to={`/movies/${id}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {poster_path != null ? (
                <img
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt="포스터 이미지"
                />
            ) : (
                <img src={NoneImg} alt="포스터 이미지" />
            )}
            {ishovered && <S.Backdrop />}
            <S.Title>{title}</S.Title>
            <S.Release>{release_date}</S.Release>
        </S.Container>
    );
}

export default MovieCard;
