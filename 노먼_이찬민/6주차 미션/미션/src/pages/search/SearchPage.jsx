import React, { useEffect } from "react";
import { useState, useCallback, useRef } from "react";
import debounce from "lodash/debounce";
import MovieList from "./../../components/movieList/MovieList";
import { authInstance } from "../../api/axiosInstance";
import useMovies from "../../hooks/useMovies";
import MovieListSkeleton from "../../components/movieListSkeleton/MovieListSkeleton";

function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // useRef로 선언해서 상태를 사용하지만, 리렌더링을 유발하지 않도록 함 (키워드의 최신상태 참조, 함수의 재생성방지)
  const keywordRef = useRef(keyword);
  const debouncedSearch = useRef(
    debounce(() => {
      handleSearchSubmit();
    }, 1000)
  ).current;

  const handleInputChange = (e) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    keywordRef.current = newKeyword; // 최신상태 반영하기
    debouncedSearch();
  };

  const handleSearchSubmit = async () => {
    console.log("나 호출됐어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    setIsLoading(true);
    try {
      const apiRes = await authInstance.get(
        `/search/movie?query=${keywordRef.current}&include_adult=false&language=ko-KR&page=1`
      );
      setMovies(apiRes.data.results);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => handleInputChange(e)}
      />
      {isLoading ? (
        <MovieListSkeleton />
      ) : (
        <MovieList movies={movies} isLoading={isLoading} isError={isError} />
      )}
    </div>
  );
}

export default SearchPage;
