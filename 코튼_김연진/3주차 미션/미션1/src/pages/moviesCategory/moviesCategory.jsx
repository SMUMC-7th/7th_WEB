import * as S from './moviesCategory.style';
import MovieCard from '../../components/movieCard/movieCard';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const MoviesCategory = () => {
    const [movies, setMovies] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=ko&page=1`, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmRjODM2Y2I2NDkzODI1ZTY3NTE4YWM2YzIyZTk0ZCIsIm5iZiI6MTcyNzkzMzY1OS45NzAzMDksInN1YiI6IjY2ZmUyNmY3Zjg3OGFkZmVkMDg0ZDE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xJQF-PgzAhlQIKZPUssGvkFViuKZ5zmz_gQP-A2PuF0'
                    }
                });
                setMovies(response.data.results); // 응답 데이터의 results만 저장
            } catch (error) {
                console.error("Error fetching movies:", error); // 에러 핸들링 추가
            }
        };

        getMovies();
    }, [category]); // category를 의존성 배열에 추가

    return (
        <S.Container>
            {movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </S.Container>
    );
};

export default MoviesCategory;