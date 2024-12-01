import * as S from './movieCardBackdrop.style.js';
import { useState } from 'react';
import NoneImg from '../../images/img.png';
import { TMovieSingleResponse } from '../../apis/movie.ts';

function MovieCardBackdrop({
    backdrop_path,
    title,
    id,
    release_date,
    vote_average,
}: TMovieSingleResponse) {
    const [ishovered, setIsHovered] = useState<boolean>(false);
    return (
        <S.Container
            to={`/movies/${id}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {backdrop_path != null ? (
                <img
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt="포스터 이미지"
                />
            ) : (
                <img src={NoneImg} alt="포스터 이미지" />
            )}
            {ishovered && (
                <>
                    <S.Title>{title}</S.Title>
                    <S.Rate>평균 ★{vote_average}</S.Rate>
                    <S.Release>개봉일 {release_date}</S.Release>
                    <S.Backdrop></S.Backdrop>
                </>
            )}
        </S.Container>
    );
}

export default MovieCardBackdrop;
