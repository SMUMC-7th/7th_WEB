import * as S from './moviesDetail.style';
import MovieInfoCard from '../../components/movieInfoCard/movieInfoCard';
import CreditInfoList from '../../components/creditInfoList/creditInfoList';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { movieId } = useParams();

    return (
        <S.Container>
            <MovieInfoCard key={movieId} movieId={movieId} />
            <CreditInfoList key={movieId} movieId={movieId} />
        </S.Container>
    );
};

export default MovieDetail;
