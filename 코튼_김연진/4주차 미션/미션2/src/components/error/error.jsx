import Lottie from 'react-lottie-player';
import errorJson from '../../lottie/Animation-error.json';
import * as S from './error.style';

const Error = () => {
    return (
        <S.Alert>
            <Lottie loop animationData={errorJson} play />
            <S.Button>홈으로 이동</S.Button>
        </S.Alert>
    );
};

export default Error;
