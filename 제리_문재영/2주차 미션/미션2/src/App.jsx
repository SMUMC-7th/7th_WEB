
import { MOVIES } from "../mocks/movies";
import './App.css'

function App() {

  return (
    <div className='container' >
      {MOVIES.results.map((movie,idx) =>
        <div className="movieCard">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="###" />
        </div>
      )}
    </div>
  )
}

export default App
