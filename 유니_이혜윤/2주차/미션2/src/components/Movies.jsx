import { MOVIES } from "../mocks/movies";

const Movies = () => {
    console.log(MOVIES);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', backgroundColor: '#060f1c'}}>
            {MOVIES.results.map((movie) => (
                <div key={movie.id} style={{marginTop: '50px'}}>
                    <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt='사진'
                        style={{borderRadius: '5px'}}
                    />
                </div>
            ))}
        </div>
    )
}

export default Movies;