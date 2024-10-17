import axios from 'axios'
import * as S from './MyList.styled'
import * as Ss from '../MovieList/MovieList.styled'
import MovieCard from '../MovieCard/MovieCard'

const MyList = () => {

    const createList = async() => {
        const sessionId = localStorage.getItem('sessionId');
        const myMovieList = await axios.post('https://api.themoviedb.org/3/list',{
            name: 'test list',
            description: 'Just an awesome list.',
            language: 'en',
            session_id: sessionId
            }, {
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0'
                }
            }
        );
        console.log("리스트생성",myMovieList);
        localStorage.setItem('list_id',myMovieList.data.list_id)
    }
    
    const list_id = localStorage.getItem('list_id')
    const deleteList = async() => {
        const dltMyList = await axios.delete(`https://api.themoviedb.org/3/list/${list_id}`,{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0'
            }
        })
        console.log("리스트삭제:",dltMyList);
    }
    
    const getMyMovie = async() => { //리스트안에 담겨있는 아이템 목록 가져오기
        const myMovie = await axios.get(`https://api.themoviedb.org/3/list/${list_id}`,{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0'
                }
        })
        console.log(myMovie);   
    }
    return (
        <S.Container>
            <S.Title>My MovieList</S.Title>
            <S.ButtonList>
                <S.Button onClick={createList}>만들기</S.Button>
                <S.Button onClick={getMyMovie}>가져오기</S.Button>
                <S.Button onClick={deleteList}>리스트 삭제</S.Button>
            </S.ButtonList>
            <Ss.MoviesList>
                <S.Text>아직 담은 영화가 없습니다.</S.Text>
                {/* <MovieCard/> */}

            </Ss.MoviesList>
                
        </S.Container>
    )
}
export default MyList;