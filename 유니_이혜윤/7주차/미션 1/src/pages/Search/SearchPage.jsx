import { useCallback, useState } from "react";
import * as S from "./SearchPage.style";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchMovieList from "@/components/SearchMovie/search-movie-list.jsx";

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams({
    mq: "",
  });
  const mq = searchParams.get("mq");
  console.log(mq);
  //console.log(searchValue);

  const debouncedSearch = useCallback(
    debounce((value) => {
      if (mq === value) return;
      navigate(`/search?mq=${value}`);
    }, 500),
    [navigate, mq]
  );

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleSearchMovie = () => {
    if (mq === searchValue) return;
    navigate(`/search?mq=${searchValue}`);
  };

  const handleSearchMovieWithKeyboard = (e) => {
    if (e.key === "Enter") {
      handleSearchMovie();
    }
  };

  return (
    <>
      <S.SearchContainer>
        <input
          type="text"
          placeholder="영화 제목을 입력해주세요"
          value={searchValue}
          onChange={onChangeSearchValue}
          onKeyDown={handleSearchMovieWithKeyboard}
        />
        <button onClick={handleSearchMovie}>검색</button>
      </S.SearchContainer>
      <SearchMovieList />
    </>
  );
};

export default SearchPage;
