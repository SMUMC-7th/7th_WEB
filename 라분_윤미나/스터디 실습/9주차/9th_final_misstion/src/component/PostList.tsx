import { useQuery } from "@tanstack/react-query";
import { GetPostList } from "../hook/blog";
import { TPostListData } from "../type/Type";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const PostList = () => {
  const { userId, setMyPostNumber } = useAuthContext();
  const {
    data: posts,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => GetPostList(),
    queryKey: ["posts"],
  });

  const filteredPosts = posts?.data.filter(
    (post: TPostListData) => post.authorId === userId
  );
  const postCount = filteredPosts?.length || 0;
  setMyPostNumber(postCount);

  if (isPending) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }
  return (
    <div className="w-full h-full flex flex-col items-center gap-4 border-[1px] border-gray-400 rounded-md">
      {posts?.data.length === 0 ? (
        <p>게시글이 없습니다.</p>
      ) : (
        <table>
          <colgroup>
            <col className="w-100" />
            <col className="w-550" />
            <col className="w-70" />
            <col className="w-150" />
            <col className="w-100" />
            <col className="w-100" />
          </colgroup>
          <thead className="h-60">
            <tr>
              <th scope="col">글번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">작성일</th>
              <th scope="col">조회</th>
              <th scope="col">좋아요</th>
            </tr>
          </thead>
          <tbody className="">
            {posts?.data.map((post: TPostListData) => (
              <tr key={post.id} className="text-center h-40">
                <td>{post.id}</td>
                <td className="text-left">
                  <Link to={`/detail/${post.id}`}>{post.title}</Link>
                </td>
                <td>{post.authorId}</td>
                <td>{post.createdAt.slice(0, 10)}</td>
                <td>{post.version}</td>
                <td>{post.likeCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PostList;
