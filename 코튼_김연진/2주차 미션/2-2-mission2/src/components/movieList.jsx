import { MOVIES } from '../../mocks/movies';
import MovieCard from './movieCard'

const MovieList = () => {

  return (
    <div className='Container' style={{'display': 'flex', 'flexWrap':'wrap', 'justifyContent': 'center', 'alignItems': 'center'}}>
      {MOVIES.results.map((movie, _) => {
        console.log(_);
        return <MovieCard key={movie.id} {... movie}/>
        })}
    </div>
  );
}

export default MovieList;
