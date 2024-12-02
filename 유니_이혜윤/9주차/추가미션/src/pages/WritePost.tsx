import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../apis/axiosInstance";
import usePostStore from "../store/postStore";

interface PostRequest {
  title: string;
  content: string;
  imageUrl: string;
}

const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axiosInstance.post(`/v1/common/image`, formData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    console.log("서버 응답:", response); // 서버 응답 확인
    return response.data.imageUrl; // 이미지 URL 반환
  } catch (error) {
    console.error("이미지 업로드 실패:", error);
  }
};

const writePost = async (data: PostRequest) => {
  const { title, content, imageUrl } = data;
  console.log(data);

  if (!title || !content || !imageUrl) {
    throw new Error("title, content, imageUrl은 필수입니다.");
  }

  const response = await axiosInstance.post(`/v1/posts`, data);
  return response.data;
};

const WritePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const addPost = usePostStore((state) => state.addPost);

  const mutation = useMutation({
    mutationFn: writePost,
    onSuccess: () => {
      alert("글 작성 성공 :)");
      navigate("/");
    },
    onError: (data) => {
      console.log(data);
      alert("글 작성에 실패했습니다.");
    },
  });

  const handleWritePost = async () => {
    if (!title || !content) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (!imageFile) {
      alert("이미지를 선택해주세요.");
      return;
    }

    try {
      const imageUrl = await uploadImage(imageFile); // 이미지 업로드
      const newPost = { title, content, imageUrl };

      addPost(newPost); // 스토어에 게시글 추가
      mutation.mutate(newPost); // 서버에 게시글 요청
    } catch (error) {
      alert("이미지 업로드에 실패했습니다.");
      console.error("이미지 업로드 실패", error);
    }
  };

  return (
    <div className="flex flex-col m-8">
      <input
        placeholder="제목을 입력하세요"
        onChange={(e) => setTitle(e.target.value)}
        className="border text-[25px] m-3 p-2"
      />
      <textarea
        placeholder="내용을 입력하세요"
        onChange={(e) => setContent(e.target.value)}
        className="border h-[400px] m-3 p-2"
      />
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            setImageFile(e.target.files[0]);
          }
        }}
        className="border m-3 p-2 text-[13px]"
      />
      <button
        onClick={handleWritePost}
        className="self-end bg-[#14B885] text-white px-6 py-2 rounded-2xl 
        m-3 hover:bg-[#5ac2a1] transition-colors"
      >
        작성
      </button>
    </div>
  );
};

export default WritePost;
