import * as S from './sessionBtn.style';
import axios from 'axios';

const SessionButton = () => {
    const getSessionHandler = async () => {
        console.log(localStorage.getItem('token'));

        try {
            const REQUEST_TOKEN = localStorage.getItem('token');
            const response = await axios.post(
                `https://api.themoviedb.org/3/authentication/session/new`,
                {
                    request_token: REQUEST_TOKEN,
                },
                {
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_TMDB_TOKEN
                        }`,
                    },
                },
            );
            localStorage.setItem('session', response?.data?.session_id);
            console.log(localStorage.getItem('session'));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return <S.Button onClick={getSessionHandler}>session</S.Button>;
};
export default SessionButton;
