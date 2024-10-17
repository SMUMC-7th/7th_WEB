import * as S from './Header.styled'
import axios from 'axios'
const Header = () => {
    
    const getToken = async() => {
        const token =  await axios.get('https://api.themoviedb.org/3/authentication/token/new', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0'
            }
        })
        // console.log(token.data.request_token);
        const REQUEST_TOKEN = token.data.request_token;
        localStorage.setItem('token',REQUEST_TOKEN);
        // window.location.href(`https://www.themoviedb.org/authenticate/${REQUEST_TOKEN}`)
        window.location.href = `https://www.themoviedb.org/authenticate/${REQUEST_TOKEN}?redirect_to=http://localhost:5173//approved`
    }
    const REQUEST_TOKEN = localStorage.getItem('token');
    console.log('토큰:',REQUEST_TOKEN);
    
    const getSessionId = async() => {
        const session = await axios.post('https://api.themoviedb.org/3/authentication/session/new',{
            request_token: REQUEST_TOKEN
        },{
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0'
            },
        })
        console.log('세션ID:',session.data.session_id);
        localStorage.setItem('sessionId',session.data.session_id)
        alert('세션 아이디 저장완료')
        
    }


    return(
        <S.Container>
            <S.Header>영화 장바구니 만들기</S.Header>
            <S.ButtonList>
                <S.Button onClick={getToken}>token</S.Button>
                <S.Button onClick={getSessionId}>session</S.Button>
            </S.ButtonList>
        </S.Container>
    )
}

export default Header;