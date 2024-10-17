import axios from 'axios';
import * as S from './MovieCard.styled'

function MovieCard(props){

    const {poster_path, title, id, onClick} = props;
    console.log("props",props);
    
    const list_id = localStorage.getItem('list_id');
    const addMovie = async() => { //리스트에 아이템 넣기
        const movieAddList = await axios.post(`https://api.themoviedb.org/3/list/${list_id}/add_item`,{
            media_id: id
        },{
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0'
                },
            }
        )
        console.log("add",movieAddList);
        // n+1번째에 눌러야 n번째까지 넣어둔 아이템을 불러오는 문제
        // const getMyMovie = async() => { //리스트안에 담겨있는 아이템 목록 가져오기
        const myMovie = await axios.get(`https://api.themoviedb.org/3/list/${list_id}`,{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZlZGIyZWU2YzZkNWJkYTZhNzY0ODcwMzQyNTk5MyIsIm5iZiI6MTcyODY2MjY1My44NzMyNTQsInN1YiI6IjY3MDNlNTRkYTVmMjlmNDNhNTczZWQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLZauy_h4fSa_16ZabwdVLluRrqDKrvUnhYtz1hfwQ0'
            }
    })
        console.log("gjgj",myMovie.items);
           
    // }
    }

    return (
        <S.Container onClick={() => addMovie()} key={id}>
            <S.Img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt=""></S.Img>
            <S.Title>{title}</S.Title>
        </S.Container>
    )
    
}

export default MovieCard;