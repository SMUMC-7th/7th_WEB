import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  GetPostDetail,
  DeletePost,
  UpdatePostContent,
  LikeUp,
  DisLikeUp,
} from "../hook/blog";
import { useAuthContext } from "../context/AuthContext";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { useEffect, useState } from "react";

const DetailedPage = () => {
  const { userId } = useAuthContext();
  const { id } = useParams();
  const detailId = Number(id);

  const nav = useNavigate();

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const {
    data: contents,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => GetPostDetail(detailId),
    queryKey: ["contents"],
  });

  const { mutate: UpdateMutation } = useMutation({
    mutationFn: UpdatePostContent,
    onSuccess: () => {
      console.log("데이터 제출 성공");
    },
  });

  const handleDeletePosts = async () => {
    await DeletePost(detailId);
    nav("/");
  };

  useEffect(() => {
    if (contents) {
      setLikeCount(contents.likeCount);
      setDislikeCount(contents.dislikeCount);
    }
    UpdateMutation(contents);
  }, [contents]);

  if (isPending) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }
  return (
    <div className="flex flex-col items-center gap-10 w-1000 min-h-[800px]">
      <h1 className="text-25">상세페이지</h1>

      <div className="w-full h-full flex flex-col gap-4 py-5 px-3 border-[1px] border-gray-400 rounded-md">
        <h1 className="text-23">{contents.title}</h1>
        <div className="flex flex-col text-14 pl-3 border-b-[1px]">
          <p>{contents.author.email.split("@")[0]}</p>
          <div className="flex gap-3  pb-5 text-gray-500 ">
            <p>{contents.createdAt.slice(0, 10)}</p>
            <p>조회 {contents.version}</p>
          </div>
        </div>
        <p>{contents.content}</p>
      </div>
      <div className="flex gap-6 w-full mt-[-20px]">
        <div className="flex text-left items-center gap-2">
          <button onClick={() => LikeUp(detailId)}>
            <BiLike />
          </button>
          <p>좋아요 {likeCount}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => DisLikeUp(detailId)}>
            <BiDislike />
          </button>
          <p>싫어요 {dislikeCount}</p>
        </div>
      </div>

      {contents.authorId === userId ? (
        <div className="flex gap-5">
          <button
            className="py-1 px-3 bg-pink-200 rounded-md"
            onClick={() => nav(`/update/${detailId}`)}
          >
            수정
          </button>
          <button
            className="py-1 px-3 bg-gray-200 rounded-md"
            onClick={handleDeletePosts}
          >
            삭제
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailedPage;
