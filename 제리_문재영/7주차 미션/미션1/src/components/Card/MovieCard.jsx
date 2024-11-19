import MoviesDetails from "../../pages/moviesDetails/MoviesDetails";
import * as S from "./MovieCard.styled"

function MovieCard(props){
    // console.log("1",props);
    const {poster_path, release_date, title, id} = props;
    // console.log(id);
    
    return(
        <S.Container to={`/movies/${id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}&language=ko-KR`} alt="" />
            <S.Title>{title}</S.Title>
            <S.Release>{release_date}</S.Release>
        </S.Container>
    )
}

export default MovieCard