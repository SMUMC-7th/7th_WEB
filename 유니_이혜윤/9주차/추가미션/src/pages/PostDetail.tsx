import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LuEraser, LuDelete } from "react-icons/lu";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import {
  getPost,
  deletePost,
  likePost,
  dislikePost,
  updatePost,
} from "../apis/post";

interface Post {
  postId: string;
  title: string;
  content: string;
  imageUrl: string;
  likeCount: number;
  dislikeCount: number;
}

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<Post>>({});
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

  const handleLike = async () => {
    try {
      if (postId) {
        const response = await likePost(postId);
        if (response.data === true) {
          setPost((prev) =>
            prev ? { ...prev, likeCount: prev.likeCount + 1 } : prev
          );
        }
      }
    } catch (err) {
      console.log(err);
      alert("좋아요를 실패했습니다.");
    }
  };

  const handleDislike = async () => {
    try {
      if (postId) {
        const response = await dislikePost(postId);
        if (response.data === false) {
          setPost((prev) =>
            prev ? { ...prev, likeCount: prev.likeCount + 1 } : prev
          );
        }
      }
    } catch (err) {
      console.log(err);
      alert("싫어요를 실패했습니다.");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({
      title: post?.title,
      content: post?.content,
      imageUrl: post?.imageUrl,
    });
  };

  const handleEditSubmit = async () => {
    try {
      if (postId) {
        const updatedPost = await updatePost(postId, editData);
        setPost(updatedPost.data);
        setIsEditing(false);
        alert("게시글이 수정되었습니다.");
      }
    } catch (err) {
      console.log(err);
      alert("게시글 수정에 실패했습니다.");
    }
  };

  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <div className="h-[600px] m-5 p-3 flex flex-col items-center border">
      {isEditing && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow w-[550px]">
            <h2 className="text-lg font-bold mb-3">게시글 수정</h2>
            <input
              type="text"
              placeholder="제목"
              value={editData.title || ""}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <textarea
              placeholder="내용"
              value={editData.content || ""}
              onChange={(e) =>
                setEditData({ ...editData, content: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setImageFile(e.target.files[0]);
                }
              }}
              className="border p-2 w-full mb-2 text-[12px]"
            />
            <div className="flex gap-2">
              <button
                onClick={handleEditSubmit}
                className="bg-blue-500 text-white p-2 rounded"
              >
                수정
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 p-2 rounded"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex self-end gap-3 cursor-pointer">
        <LuEraser onClick={handleEdit} />
        <LuDelete onClick={handleDelete} />
      </div>
      <h1 className="text-[40px] font-bold">{post.title}</h1>
      <img
        src={`http://localhost:3000/${post.imageUrl}`}
        alt={post.title}
        className="w-[500px] h-[350px] mb-4 object-cover border m-2"
      />
      <div className="w-[500px] flex gap-3 cursor-pointer">
        <div className="flex items-center gap-1" onClick={handleLike}>
          <FaRegThumbsUp />
          <span>{post.likeCount}</span>
        </div>
        <div className="flex items-center gap-1" onClick={handleDislike}>
          <FaRegThumbsDown />
          <span>{post.dislikeCount}</span>
        </div>
      </div>
      <p className="flex w-[500px] m-5">{post.content}</p>
    </div>
  );
};

export default PostDetail;
