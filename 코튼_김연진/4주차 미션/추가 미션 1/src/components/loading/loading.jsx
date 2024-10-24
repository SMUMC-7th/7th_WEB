import Lottie from 'react-lottie-player';
import loadingJson from '../../lottie/Animation-loading.json';
import * as S from './loading.style';
const Loading = () => {
    return (
        <S.Alert>
            <Lottie loop animationData={loadingJson} play />
        </S.Alert>
    );
};

export default Loading;
