import { MoviePreview } from '../components/MovieDetails/MoviePreview';
import { MovieInfo } from '../components/MovieDetails/MovieInfo';

function MovieDetails() {
  return (
    <div className='w-full flex flex-col gap-8'>
      <MoviePreview />
      <MovieInfo />
    </div>
  );
}

export default MovieDetails;
