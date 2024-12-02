import { useQuery } from "@tanstack/react-query";
import { getPostList } from "../apis/post";

function useGetPostList() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: () =>
      getPostList({
       ,
      }),
  });
}
