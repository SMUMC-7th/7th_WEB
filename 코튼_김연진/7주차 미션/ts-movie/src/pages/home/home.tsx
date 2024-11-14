import * as S from './home.style';
import MovieCard from '../../components/movieCard/movieCard';
import { useQuery } from '@tanstack/react-query';
import {
    TMovieTotalResponse,
    getTotalMovie,
    TMovieSingleResponse,
} from '../../apis/movie';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import { useAuthContext } from '../../context/LogInContext';
const HomePage = () => {
    const { isLogin } = useAuthContext();
    console.log(isLogin);
    const { data, error, isLoading } = useQuery<TMovieTotalResponse>({
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
            {data.results.map((movie: TMovieSingleResponse) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </S.Container>
    );
};

export default HomePage;
