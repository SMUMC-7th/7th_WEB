import { useState, ChangeEvent, KeyboardEvent } from "react";
import * as S from "./search.style";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchMovieList from "../../components/SerchMovie/serch-movie-list";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const [searchParams] = useSearchParams({
    mq: "",
  });

  const mq = searchParams.get("mq");

  const handleSearchMovie = () => {
    if (mq === searchValue) return;
    navigate(`/search?mq=${searchValue}`);
  };

  const handleSearchMovieWithKeyboard = (
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleSearchMovie();
    }
  };

  return (
    <S.SearchContainer>
      <S.Container>
        <S.Input
          placeholder="  영화 제목을 입력해주세요"
          value={searchValue}
          onChange={onChangeSearchValue}
          onKeyDown={handleSearchMovieWithKeyboard}
        />
        <S.Button onClick={handleSearchMovie}>검색</S.Button>
      </S.Container>
      <SearchMovieList />
    </S.SearchContainer>
  );
};

export default SearchPage;
