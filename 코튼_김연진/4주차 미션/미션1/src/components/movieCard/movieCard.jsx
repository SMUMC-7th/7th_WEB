import * as S from './movieCard.style.js';
import { useState } from 'react';

function MovieCard(props) {
    console.log(props);
    const { poster_path, title, release_date } = props;
    const [ishovered, setIsHovered] = useState(false);
    console.log(release_date);
    return (
        <S.Container
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt=""
            />
            {ishovered && <S.Backdrop />}
            <S.Title>{title}</S.Title>
            <S.Release>{release_date}</S.Release>
        </S.Container>
    );
}

export default MovieCard;
