import { useQuery } from "@tanstack/react-query";
import { DeletePost, GetPostList } from "../hook/blog";
import { TPostListData } from "../type/Type";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyPostList = () => {
  const { userId, myPostNumber } = useAuthContext();

  const {
    data: posts,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => GetPostList(),
    queryKey: ["myPosts"],
  });

  const [selectedPosts, setSelectedPosts] = useState<number[]>([]);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  const handleCheckboxChange = (id: number) => {
    setSelectedPosts((prev) =>
      prev.includes(id) ? prev.filter((postId) => postId !== id) : [...prev, id]
    );
  };
  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedPosts([]);
    } else {
      const allPostIds = posts.data
        .filter((post: TPostListData) => post.authorId === userId)
        .map((post: TPostListData) => post.id);
      setSelectedPosts(allPostIds || []);
    }
    setIsAllSelected(!isAllSelected);
  };
  const handleDeletePosts = async () => {
    if (selectedPosts.length === 0) alert("선택한 게시글이 없습니다.");

    for (const id of selectedPosts) {
      await DeletePost(id);
    }
    setSelectedPosts([]);
    setIsAllSelected(false);
  };

  if (isPending) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }
  return (
    <div className="flex flex-col items-center gap-10 w-1000 min-h-[800px]">
      <h1 className="text-25">내가 쓴 글</h1>
      <div className="w-full h-full flex flex-col items-center gap-4 border-[1px] border-gray-400 rounded-md">
        {myPostNumber === 0 ? (
          <p>게시글이 없습니다.</p>
        ) : (
          <table>
            <colgroup>
              <col className="w-40" />
              <col className="w-100" />
              <col className="w-550" />
              <col className="w-150" />
              <col className="w-70" />
            </colgroup>
            <thead className="h-60">
              <tr>
                <th scope="col">선택</th>
                <th scope="col">글번호</th>
                <th scope="col">제목</th>
                <th scope="col">작성일</th>
                <th scope="col">조회</th>
              </tr>
            </thead>
            <tbody className="">
              {posts?.data
                .filter((post: TPostListData) => post.authorId === userId)
                .map((post: TPostListData) => (
                  <tr key={post.id} className="text-center h-40">
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedPosts.includes(post.id)}
                        onChange={() => handleCheckboxChange(post.id)}
                      />
                    </td>
                    <td>{post.id}</td>
                    <td className="text-left">
                      <Link to={`/detail/${post.id}`}>{post.title}</Link>
                    </td>
                    <td>{post.createdAt.slice(0, 10)}</td>
                    <td>{post.version}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="w-full flex justify-between px-5">
        <div className="flex gap-5">
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={handleSelectAll}
          />
          <p>전체선택</p>
        </div>
        <div className="flex gap-5">
          <Link to="/write" className="py-1 px-3 bg-pink-200 rounded-md">
            글쓰기
          </Link>
          <button
            onClick={handleDeletePosts}
            className="py-1 px-3 bg-gray-200 rounded-md"
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPostList;
