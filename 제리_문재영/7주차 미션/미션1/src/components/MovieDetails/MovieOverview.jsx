import useCustomFetch from "../../hooks/useCustomFetch";
import * as S from "./MovieDetails.styled"

const MovieOverview = ({ movieId }) => {
    const {data: movie, isLoading, isError} = useCustomFetch(`movie/${movieId}?language=ko-KR`);
    // console.log(movie,'11');
    
    if(isLoading){
        return <div>
            <h1 style={{color:"white"}}>로딩중입니다...</h1>
        </div>
    }
    if (isError){
        return <div><h1 style={{color:"white"}}>에러발생</h1></div>
    }
    if (!(movie.data)) {
        return null; // movie에 데이터가 없을 때
    }

    const {
        backdrop_path,
        original_title,
        vote_average,
        release_date,
        runtime,
        tagline,
        overview
    } = movie.data;
    const date = release_date.substring(0,4)
    const vote = Math.ceil(vote_average * 100) /100
    const backgroundImgUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`
    // console.log(backdrop_path,original_title,vote_average,date,runtime,tagline,overview);

    return(
        <S.ImgContainer image = {backgroundImgUrl}>
            <S.GrayBox>
                    <S.Text size = {"30px"} bold = {"bold"}>{original_title}</S.Text>
                    <S.Text> 평점 {vote} </S.Text>
                    <S.Text> {date} </S.Text>
                    <S.Text> {runtime}분 </S.Text>
                    <S.Text>{overview}{tagline}</S.Text>
            </S.GrayBox>
        </S.ImgContainer>
    )
}
export default MovieOverview;