import * as S from "./CreditProfile.style";

const CreditProfile = ({ name, profile_path, character, job }) => {
  const profileImageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w185${profile_path}`
    : "https://via.placeholder.com/185"; // 대체이미지

  return (
    <S.Profile>
      <S.ImageWrapper>
        <img src={profileImageUrl} alt={name} />
      </S.ImageWrapper>
      <S.Info>
        <h5>{name}</h5>
        {character && <p>{character}</p>}
        {job && <p>{job}</p>}
      </S.Info>
    </S.Profile>
  );
};

export default CreditProfile;
