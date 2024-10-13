import * as S from './tokenBtn.style';
// import useCustomFetch from '../../hooks/useCustomFetch';
import { axiosInstance } from '../../apis/axios-instance';
import { useState } from 'react';
const TokenButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getTokenHandler = async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.get(
                `https://api.themoviedb.org/3/authentication/token/new`,
            );
            const REQUEST_TOKEN = response?.data?.request_token;
            localStorage.setItem('token', REQUEST_TOKEN);
            console.log(REQUEST_TOKEN);
        } catch (error) {
            console.log(error);
            console.log(isError);
            setIsError(true);
        } finally {
            setIsLoading(false);
            console.log(isLoading);
            window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem(
                'token',
            )}?redirect_to=http://localhost:5173`;
        }
    };

    return <S.Button onClick={getTokenHandler}>token</S.Button>;
};
export default TokenButton;
