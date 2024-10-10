import * as S from "./ArtistCard.style";

const ArtistCard = (props) => {
  const { name, url, followers, genres } = props;
  return (
    <S.Container>
      <p>{name}</p>
      <S.Card>
        <img src={url}></img>
        <p>followers : {followers}</p>
        <p>genres</p>
        {genres.map((genre) => {
          return <p key={genre}>{genre}</p>;
        })}
      </S.Card>
    </S.Container>
  );
};

export default ArtistCard;
