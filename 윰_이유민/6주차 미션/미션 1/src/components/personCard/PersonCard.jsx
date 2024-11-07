import * as S from './PersonCard.style';

function PersonCard(person) {
  const profile_img = "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"

  return (
    <S.Container>
      <img
        src={person.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : profile_img}
        alt={`${person.name}의 프로필 사진`}
      />
      <h5>{person.name}</h5>
      <p>{person.character ? person.character : person.job}</p>
    </S.Container>
  );
}

export { PersonCard };
