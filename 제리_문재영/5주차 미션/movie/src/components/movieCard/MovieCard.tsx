import {MOVIES} from '../../mocks/movies.js'

function MovieCard({results}){
// console.log(MOVIES.results);
console.log(results,'333');
const result = results[0]
    return (
        <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="" />
    )
}

export default MovieCard;