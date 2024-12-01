import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LuEraser, LuDelete } from "react-icons/lu";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import { getPost, deletePost } from "../apis/post";

interface Post {
  postId: string;
  title: string;
  content: string;
  imageUrl: string;
}

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (postId) {
          const data = await getPost(postId);
          setPost(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      if (postId) {
        await deletePost(postId);
        alert("게시글이 삭제되었습니다.");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      alert("게시글 삭제에 실패했습니다.");
    }
  };

  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <div className="h-[600px] m-5 p-3 flex flex-col items-center border">
      <div className="flex self-end gap-3 cursor-pointer">
        <LuEraser />
        <LuDelete onClick={handleDelete} />
      </div>
      <h1 className="text-[40px] font-bold">{post.title}</h1>
      <img
        src={`http://localhost:3000/${post.imageUrl}`}
        alt={post.title}
        className="w-[500px] h-[350px] mb-4 object-cover border m-2"
      />
      <div className="w-[500px] flex gap-3 cursor-pointer">
        <FaRegThumbsUp />
        <FaRegThumbsDown />
      </div>
      <p className="flex w-[500px] m-5">{post.content}</p>
    </div>
  );
};

export default PostDetail;
