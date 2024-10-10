import * as S from './userInfo.style'
import useCustomFetch from '../../hooks/useCustomFetch';
import loadingJson from '../../../public/lottie/Animation - 1728478059105.json';
import errorJson from '../../../public/lottie/Animation - 1728478966350.json';
import Lottie from 'react-lottie-player';

const UserInfo = () => {
    const {data:user, isLoading, isError}= useCustomFetch(`/me`);
    if (isLoading) {
        return <S.Alert><Lottie loop animationData={loadingJson} play /></S.Alert>
    }

    if (isError) {
        return <S.Alert><Lottie loop animationData={errorJson} play /></S.Alert>;
    }
    console.log(user.data);
    return <S.Container>
        <S.Title>현재 로그인한 유저</S.Title>
        <S.Text>
            <S.Content>name: {user?.data?.display_name}</S.Content>
            <S.Content>id: {user?.data?.id}</S.Content>
        </S.Text>
    </S.Container>
    
}

export default UserInfo