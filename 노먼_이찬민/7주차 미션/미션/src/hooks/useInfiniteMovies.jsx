import { useEffect, useState } from "react";
import { authInstance } from "../api/axiosInstance";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

function useInfiniteMovies(url) {
  // 커스텀 훅에서 쓸 상태 정의
  const [movies, setMovies] = useState([]);

  async function getMoviesInfinite(page) {
    try {
      //https://api.themoviedb.org/3은 이미 지정됨
      const apiRes = await authInstance.get(
        "https://api.themoviedb.org/3" + url + "&page=" + page
      );
      // 기존 movies에 새로 가져오는 데이터를 뒤에 계속 추가함
      // [...prevMovies, data] : 이전 상태값인 prev를 그대로 사용하고 data를 추가함
      // [...data] : data 객체를 내부 속성별로 모두 분해해서 배열([])에 추가함
      setMovies((prevMovies) => [...prevMovies, ...apiRes.data.results]);
      return apiRes.data;
    } catch (error) {
      console.error(error);
    }
  }

  // useInfiniteQuery (무한스크롤 전용 쿼리)
  const infiniteData = useInfiniteQuery({
    queryKey: ["moviesInfinite"],
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

  return { infiniteData, movies };
}

export default useInfiniteMovies;
