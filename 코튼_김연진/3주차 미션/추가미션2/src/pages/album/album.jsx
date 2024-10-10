import * as S from './album.style'
import AlbumInfo from "../../components/AlbumInfo/AlbumInfo"
import useCustomFetch from '../../hooks/useCustomFetch';
import Lottie from 'react-lottie-player';
import loadingJson from '../../../public/lottie/Animation - 1728478059105.json';
import errorJson from '../../../public/lottie/Animation - 1728478966350.json';


const Album = () => {
    const {data:albums, isLoading, isError}= useCustomFetch(`/albums?ids=5V729UqvhwNOcMejx0m55I,1HMLpmZAnNyl9pxvOnTovV,22DH3kdbdLrelnvpkf6VHu`);
    const albumsData = albums?.data?.albums;
    if (isLoading) {
        return <S.Alert><Lottie loop animationData={loadingJson} play /></S.Alert>
    }
    if (isError) {
        return <S.Alert>
                <Lottie loop animationData={errorJson} play />
                <S.Button>홈으로 이동</S.Button>
            </S.Alert>;
    }
    console.log(albumsData);
    return <S.Container>
        {albumsData?.map((album, idx) => {
            return <AlbumInfo key={idx} {... album}></AlbumInfo>
        })}
    </S.Container>
    
}
export default Album