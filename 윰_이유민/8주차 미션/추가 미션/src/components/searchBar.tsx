import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchMovie = () => {
    navigate(`/movies?mq=${searchValue}`);
  };

  const handleSearchMovieWithKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchMovie();
    }
  };

  return (
    <div className='w-60 h-8 bg-gray-600 flex gap-2 px-1 rounded-md items-center'>
      <IoIosSearch onClick={handleSearchMovie} size='1.5rem' />
      <input
        className='bg-transparent w-full text-sm'
        placeholder='영화 제목을 입력하세요'
        type='text'
        value={searchValue}
        onChange={onChangeSearchValue}
        onKeyDown={handleSearchMovieWithKeyboard}
      />
    </div>
  );
};

export { SearchBar };
