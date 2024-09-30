import { useState } from 'react';
import { MOVIES } from "../mocks/movies";

const Movies = () => {
    // console.log(MOVIES);

    const [hoverMovie, setHoverMovie] = useState(null);

    const handleMouseEnter = (movieId) => {
        setHoverMovie(movieId);
    };

    const handleMouseLeave = () => {
        setHoverMovie(null);
    };


    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', backgroundColor: '#060f1c'}}>
            {MOVIES.results.map((movie) => (
                <div key={movie.id} style={{marginTop: '50px', position: 'relative'}}
                    onMouseEnter = {() => handleMouseEnter(movie.id)}
                    onMouseLeave = {handleMouseLeave}>
                    <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt='사진'
                        style={{borderRadius: '5px'}}
                    />
                    {hoverMovie === movie.id && (
                        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)'
                        }}>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Movies;