import * as S from './MovieCard.style'

function MovieCard(movie) {

  const { poster_path, title } = movie;

  return (
    <S.Container>
      <img alt={`${title} 포스터`} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      <p>{title}</p>
    </S.Container>
  )
}

export { MovieCard }