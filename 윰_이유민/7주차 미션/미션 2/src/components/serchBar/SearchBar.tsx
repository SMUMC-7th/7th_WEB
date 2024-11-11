import * as S from './SearchBar.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Params {
  params: string;
}

function SearchBar({ params }: Params) {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchMovie = () => {
    if (params === searchValue) return;

    navigate(`/search?mq=${searchValue}`);
  };

  const handleSearchMovieWithKeyboard = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      handleSearchMovie();
    }
  };

  return (
    <S.Container>
      <S.Input
        placeholder="영화 제목을 입력해주세요."
        value={searchValue}
        onChange={onChangeSearchValue}
        onKeyDown={handleSearchMovieWithKeyboard}
      />
      <S.SearchBtn onClick={handleSearchMovie}>검색</S.SearchBtn>
    </S.Container>
  );
}

export { SearchBar };
