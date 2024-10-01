import { useState } from 'react';

function MovieCard(movie) {

  const [isHover, setIsHover] = useState(false);
  const { poster_path} = movie;

  return <div style={{ width: '140px', height: '200px', backgroundColor: 'aliceblue', position: 'relative', borderRadius: '20px'}}>
    <img style={{ width: '140px', height: '200px', borderRadius: '20px' }} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" onMouseOver={() => setIsHover(true)} onMouseOut={() => {setIsHover(false)}} />
    { isHover && 
      <div style={{ width: '140px', height: '200px', backgroundColor: 'black', position: 'absolute', top: '0', left: '0', opacity: '0.5', borderRadius: '20px' }}  
      />}
  </div>
}

export default MovieCard; 