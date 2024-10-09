import * as S from './artistInfo.style'
import useCustomFetch from '../../hooks/useCustomFetch';
import { useParams } from 'react-router-dom';
import loadingJson from '../../../public/lottie/Animation - 1728478059105.json';
import errorJson from '../../../public/lottie/Animation - 1728478966350.json';
import Lottie from 'react-lottie-player';

const Artist = () => {
    const { id } = useParams();
    console.log(`/artists/${id}`)
    const {data:artist, isLoading, isError}= useCustomFetch(`/artists/${id}`);
    if (isLoading) {
        return <S.Alert><Lottie loop animationData={loadingJson} play /></S.Alert>
    }
    if (isError) {
        return <S.Alert><Lottie loop animationData={errorJson} play /></S.Alert>;
    }
    console.log(artist.data);
    const genres = artist?.data?.genres;
    console.log(genres)
    return <S.Container>
        <S.Title>{artist?.data?.name}</S.Title>
        <S.Box>
            <S.Img src={artist?.data?.images[0].url} alt="" />
            <S.Texts>
                <S.Text>followers: {artist?.data?.followers?.total}</S.Text>
                <S.Text>genres</S.Text>
                {genres?.map((genre, idx) => {
                    return <S.Text key={idx}>{genre}</S.Text>
                })}
            </S.Texts>
        </S.Box>
    </S.Container>
    
}

export default Artist