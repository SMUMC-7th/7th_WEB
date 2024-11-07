import { authInstance } from "../../api/axiosInstance";

async function getMovies(category) {
  //https://api.themoviedb.org/3은 이미 지정됨
  const apiRes = await authInstance.get(
    `/movie/${category}?language=ko-KR&page=1`
  );
  console.log(apiRes);
  return apiRes.data.results;
}

export { getMovies };
