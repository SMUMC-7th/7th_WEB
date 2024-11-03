import { useState } from 'react';
import PropTypes from 'prop-types';  // PropTypes 추가


function MovieCard(props) {
    const [IsHover, setIsHover] = useState(false);
    const {poster_path} = props;
    return (
        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} style={{margin:'10px', position:'relative'}}>
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt='' style={{ width: '140px',height:'200px', borderRadius: '5px'}} />
            {IsHover && <div style={{backgroundColor: 'black', position: 'absolute', top: '0', left: '0', opacity:' 0.5', width:'140px',height:'200px' , borderRadius: '5px'}}/>}
        </div>
    );
}

MovieCard.propTypes = {
    poster_path: PropTypes.string.isRequired,  // props validation 추가
};


export default MovieCard;

