import { useParams } from "react-router-dom";
import MovieCredit from "../../components/MovieDetails/MovieCredit";
import MovieOverview from "../../components/MovieDetails/MovieOverview";

const MoviesDetails = () => {
    const {movieId} = useParams();
    
    return (
        <div>
            <div>
                <MovieOverview key={movieId} movieId={movieId}/>
            </div>
            <div>
                <div>
                    <MovieCredit key={movieId} movieId={movieId}/>
                </div>
            </div>
        </div>
    )
}

export default MoviesDetails;