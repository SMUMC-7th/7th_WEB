import * as S from './home.style'
import MovieCard from '../../components/movieCard/movieCard'
import useCustomFetch from '../../hooks/useCustomFetch';
import Lottie from 'react-lottie-player';
import loadingJson from '../../../public/lottie/Animation - 1728478059105.json';
import errorJson from '../../../public/lottie/Animation - 1728478966350.json';

const HomePage = () => {
    const {data:movies, isLoading, isError}= useCustomFetch(`/movie/popular?language=ko&page=1`);
    
    if (isLoading) {
        return <S.Alert><Lottie loop animationData={loadingJson} play /></S.Alert>
    }

    if (isError) {
        return <S.Alert>
            <Lottie loop animationData={errorJson} play />
            <S.Button>홈으로 이동</S.Button>
        </S.Alert>;
    }
    
    return <S.Container>
            {movies.data?.results.map((movie, _) => { //?: optional changing
            console.log(_);
            return <MovieCard key={movie.id} {... movie}/>
            })}
    </S.Container>
}

export default HomePage;
