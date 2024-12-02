import React, { useEffect } from "react";
import { getCookie } from "../../utils/cookie";
import { authInstance } from "../../apis/axiosInstance";
import usePosts from "../../hooks/usePosts";
import { TPost } from "../../types/post";
import PostCard from "../../components/PostCard";

function MainPage() {
  const { data } = usePosts("/v1/posts?order[]=likeCount_DESC");
  const postList: TPost[] = data?.data;
  console.log(postList);

  return (
    <div className="w-full h-full flex flex-col flex-center">
      <form
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const resApi = await authInstance.post("/v1/posts", {
            title: e.target[0].value,
            content: e.target[1].value,
          });
        }}
        className="w-[80%] flex flex-col flex-center"
      >
        <p>빠르게 글 작성하기</p>
        <div className="w-full flex-center">
          <label htmlFor="title">제목:</label>
          <input
            id="title"
            type="text"
            className="w-[70%] px-10 py-5 my-5 text-2xl inline-flex items-center rounded-md bg-blue-50 font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20"
          />
        </div>
        <div className="w-full flex-center">
          <label htmlFor="content">내용:</label>
          <textarea
            id="content"
            className="w-[70%] h-[30vh] px-10 py-5 my-5 text-2xl inline-flex items-center rounded-md bg-blue-50 font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20"
          />
        </div>
        <button className="mb-10 bg-blue-300 rounded px-4 py-2">
          글 작성하기
        </button>

        <div className="flex flex-col border-y">
          <p>최근에 작성한 포스트</p>
          <div className="w-[80%] flex justify-start items-center gap-[10px] overflow-x-auto">
            {postList &&
              postList.map((post, _) => {
                return <PostCard key={post.id} post={post}></PostCard>;
              })}
          </div>
        </div>
      </form>
    </div>
  );
}

export default MainPage;
