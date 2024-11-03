import './App.css'
import Button from './components/button/button'
import { FaCcApplePay } from "react-icons/fa";
import { Color } from './components/button/Button';
import MovieCard from './components/movieCard/movieCard';
import Container from './components/container/Container';
import { Flex, Display } from './components/container/Container';
import { MOVIES, IMOVIES, IMOVIE } from './mocks/movies.ts'


function App(){
  console.log(MOVIES.results);
  const moives: IMOVIE[] = MOVIES.results;
  // console.log(moives,'3');
  
  return (
    <Container display={Display.FLEX} flexDirection={Flex.ROW}>
  
        <MovieCard results={moives}/>
      

      
    </Container>
  )}

export default App
