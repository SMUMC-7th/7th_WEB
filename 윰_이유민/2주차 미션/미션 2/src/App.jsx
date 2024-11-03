import { MOVIES } from './mocks/movies.js';
import MovieCard from './components/movieCard/MovieCard.jsx';

function App() {
  
  return (
    <div style={{height: '100vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px'}}>
      {MOVIES.results.map((movie, _) => {
        return <MovieCard key={movie.id} {...movie} />
        }
      )}
    </div>
  );
}

export default App;
