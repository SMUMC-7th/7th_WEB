import * as S from './MovieCard.style';

function MovieCard({poster_path, title, onClickMethod}) {
  return (
    <S.Container onClick={onClickMethod}>
      <img
        alt={`${title} 포스터`}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
      <p>{title}</p>
    </S.Container>
  );
}

export { MovieCard };
