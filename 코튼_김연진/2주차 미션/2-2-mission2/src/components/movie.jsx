import React, { useState } from 'react';
import { MOVIES } from '../../mocks/movies';

function Movie() {
  const [hoveredIndex, setHoveredIndex] = useState('');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
      {MOVIES.results.map((movie, index) => (
        <div key={movie.id} style={{ display:'flex', margin: '10px', position: 'relative'}} // z-index 설정을 위해 position 설정
          onMouseEnter={() => setHoveredIndex(index)} // 커서가 요소 안으로 들어왔을 때
          onMouseLeave={() => setHoveredIndex(null)} // 커서가 요소 밖으로 나갔을 때
        >
          <img 
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
            alt=''
            style={{ width: '120px', borderRadius: '5%'}} 
          />
          

          {/* 커서가 올라간 곳의 index와 이미지의 index가 같다면*/}
          {hoveredIndex === index && (
            <div 
              style={{
                position: 'absolute', // z-index 설정을 위해 position 설정
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                borderRadius: '5%', 
                zIndex: 1 // 이미지의 수직 위치를 결정 position을 반드시 설정해줘야함(기본인 static에서는 동작X)
              }} 
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Movie;
