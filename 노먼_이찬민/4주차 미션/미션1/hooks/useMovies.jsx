import { useEffect, useState } from "react";
import { authInstance } from "./../src/api/axiosInstance";

function useMovies(category) {
  // 커스텀 훅에서 쓸 상태 정의
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // api 요청(비즈니스 로직) 및 상태 관리
  useEffect(() => {
    // api 요청 함수
    async function getMovies() {
      setIsLoading(true);
      try {
        //https://api.themoviedb.org/3은 이미 지정됨
        const apiRes = await authInstance.get(
          `/movie/${category}?language=ko-KR&page=1`
        );
        console.log(apiRes);
        setMovies(apiRes.data.results);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    getMovies();
  }, [category]);

  return { movies, isLoading, isError };
}

export default useMovies;
