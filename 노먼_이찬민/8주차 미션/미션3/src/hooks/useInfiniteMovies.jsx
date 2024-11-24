import { useEffect, useState } from "react";
import { authInstance } from "../api/axiosInstance";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

function useInfiniteMovies(url) {
  // 커스텀 훅에서 쓸 상태 정의
  // const [movies, setMovies] = useState([]);

  async function getMoviesInfinite(page) {
    try {
      //https://api.themoviedb.org/3은 이미 지정됨
      const apiRes = await authInstance.get(
        "https://api.themoviedb.org/3" + url + "&page=" + page
      );
      return apiRes.data;
    } catch (error) {
      console.error(error);
    }
  }

  // useInfiniteQuery (무한스크롤 전용 쿼리)
  const infiniteData = useInfiniteQuery({
    queryKey: ["moviesInfinite", url],
    // pageParam : lastPage의 속성 중 하나, 현재 설정된 페이지를 의미함
    queryFn: ({ pageParam }) => getMoviesInfinite(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      // lastPage: 콜백함수에서 리턴한 값(api 응답)을 의미 -> 내가 쓰는 api 응답 형태를 보고 이 lastPage 코드를 수정하는 것
      if (lastPage.page + 1 > lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
    refetchOnWindowFocus: false, // 포커스가 다시 생겨도 데이터 다시 가져오지 않음
  });

  return { infiniteData };
}

export default useInfiniteMovies;
