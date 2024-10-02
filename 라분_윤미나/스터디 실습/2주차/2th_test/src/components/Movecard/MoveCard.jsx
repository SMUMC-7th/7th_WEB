import { useState } from 'react';
import * as S from './MovieCard.style'

function MovieCard(props){
    
    const {title, poster_path}=props;
    const [isHover, setIsHover]=useState(false);
    return <S.Container onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`}/>
        {isHover && <S.Backdrop/>}
    
    </S.Container>
}

export default MovieCard;