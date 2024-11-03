import * as S from './SearchBar.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ params }) {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchMovie = () => {
    if (params === searchValue) return;

    navigate(`/search?mq=${searchValue}`);
  };

  const handleSearchMovieWithKeyboard = (e) => {
    if (e.key === 'Enter') {
      handleSearchMovie();
    }
  };

  return (
    <S.Container>
      <S.Input
        placeholder="영화 제목을 입력해주세요."
        vlaue={searchValue}
        onChange={onChangeSearchValue}
        onKeyDown={handleSearchMovieWithKeyboard}
      />
      <S.SearchBtn onClick={handleSearchMovie}>검색</S.SearchBtn>
    </S.Container>
  );
}

export { SearchBar };
