import * as S from './movieListCard.style';
import Error from '../error/error';
import Loading from '../loading/loading';
import { useState } from 'react';
import useCustomFetch from '../../hooks/useCustomFetch';
const MovieListCard = ({ movieId, onClick }) => {
    const [ishovered, setIsHovered] = useState(false);
    console.log(movieId);
    const handleClick = () => {
        onClick(movieId); // 클릭 시 상위 컴포넌트로 movieId 전달
    };
    const {
        data: movie,
        isLoading,
        isError,
    } = useCustomFetch(`/movie/${movieId}?language=ko`);
    console.log(movie);

    const movieData = movie.data;
    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        console.log('에러임');
        return <Error />;
    }

    if (!movieData) {
        return <S.Alert>데이터를 찾을 수 없습니다...</S.Alert>;
    }

    const { poster_path, title } = movieData;
    console.log(title);
    const backgroundImageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

    return (
        <S.Container
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {ishovered && <S.Backdrop />}
            <S.Img src={backgroundImageUrl} alt="영화 포스터" />
            <S.Title>{title}</S.Title>
        </S.Container>
    );
};

export default MovieListCard;
