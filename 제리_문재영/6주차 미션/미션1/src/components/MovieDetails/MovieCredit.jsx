import useCustomFetch from "../../hooks/useCustomFetch";
import * as S from './MovieDetails.styled'
import Profile from "../Profile/Profile";


const MovieCredit = ({ movieId }) => {

    const {data: credit, isLoading, isError} = useCustomFetch(`movie/${movieId}/credits?language=ko`);
    // console.log("credit",credit);

    if(isLoading){
        return <div>
            <h1 style={{color:"white"}}>로딩중입니다...</h1>
        </div>
    }
    if (isError){
        return <div><h1 style={{color:"white"}}>에러발생</h1></div>
    }

    return(
        <div>
            <h1 style={{color:"white"}}>감독/출연</h1>
            <S.Profile_lst>
                {credit?.data?.cast.map((cast,_) => (
                <Profile key={cast.id} {...cast}/>
            ))}
                {credit?.data?.crew.map((crew,_) => (
                <Profile key={crew.id} {...crew}/>
            ))}
            </S.Profile_lst>
        </div>
    )
}
export default MovieCredit