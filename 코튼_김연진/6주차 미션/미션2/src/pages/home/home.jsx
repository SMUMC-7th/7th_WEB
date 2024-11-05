import * as S from './home.style';
import MovieCard from '../../components/movieCard/movieCard';
import { useQuery } from '@tanstack/react-query';
import { getTotalMovie } from '../../apis/movie';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
const HomePage = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['totalMovie', 1],
        queryFn: () => getTotalMovie(1),
    });

    if (isLoading) {
        return <Loading />;
    }

    if (!data || error) {
        console.log('데이터가 없습니다');
        return <Error />;
    }
    return (
        <S.Container>
            <S.MovieCardList>
                {data.results.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </S.MovieCardList>
        </S.Container>
    );
};

export default HomePage;
