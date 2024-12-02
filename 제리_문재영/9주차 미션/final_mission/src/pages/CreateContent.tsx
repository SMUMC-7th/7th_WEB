import React from "react";
import { createPost, deletePost, getPostList } from "../apis/api";
import { useQuery } from "@tanstack/react-query";

export const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { data: posts, isPending } = useQuery({
    queryFn: () => getPostList({ title }),
    queryKey: ["post", title],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={createPost(title, content)} type="submit">
          글 생성
        </button>
      </form>

      {isPending ? (
        <div>로딩중입니다</div>
      ) : (
        posts?.data.map((post, idx) => {
          return (
            <div key={idx}>
              <p>{post.title}</p>
              <p>{post.content}</p>
              <button onClick={deletePost(post.id)}>삭제</button>
            </div>
          );
        })
      )}
    </>
  );
};
