import * as S from "./Director.style";

type DirectorProps = {
  profile_path: string;
  character: string;
  original_name: string;
};

const Director = (props: DirectorProps) => {
  const { profile_path, character, original_name } = props;

  return (
    <S.Container>
      <img src={`https://image.tmdb.org/t/p/original${profile_path}`}></img>
      <h3>{original_name}</h3>
      <p>{character}</p>
    </S.Container>
  );
};

export default Director;
