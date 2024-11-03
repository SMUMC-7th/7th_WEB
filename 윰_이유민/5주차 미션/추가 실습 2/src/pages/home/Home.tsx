import styled from 'styled-components';
import { MOVIES } from '../../mocks/movies';
import MovieCard from '../../components/movieCard/MovieCard';

const HomePage = () => {
  return (
    <Container>
      {MOVIES.results.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
`;
