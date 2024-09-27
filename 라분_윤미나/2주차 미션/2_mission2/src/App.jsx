import { useState, useEffect } from 'react'
import Image from './components/Image';
//import './mocks/movies.js'
import './App.css'
import { MOVIES } from './mocks/movies.js';

function App() {
  const [urls, setUrls]= useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);


  //url 합침.
  const addUrl = () => {    
    const newUrls = MOVIES.results.slice(0, 20).map(movie => ({
      url: 'https://image.tmdb.org/t/p/w500' + movie.poster_path
    }));
    setUrls(newUrls);
  };
  //합친 url 유지(?)
  useEffect(()=>{
    addUrl();
  }, []);
 
  
  return (
    <div style={{maxWidth :'1000px',display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'20px'}}>     
      {urls.length > 0 && urls.map((item, idx)=>(
        <div 
          key={idx}
          onMouseOver={()=> setHoverIndex(idx)}
          onMouseOut={()=> setHoverIndex(null)} 
          style={{width:'80px', borderRadius:'10px', overflow:'hidden'}}>
          <Image key={idx} url={item.url}></Image>
          <div style={{
            width:'80px',
            height:'120px',
            borderRadius:'10px',
            top: idx<10 ?8:151,
            position:'absolute',
            backgroundColor:'rgba(0,0,0,0.5)', 
            opacity: hoverIndex === idx ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents:'none'}}></div>

        </div>
        
      ))}
      
    </div>
  )
}

export default App
