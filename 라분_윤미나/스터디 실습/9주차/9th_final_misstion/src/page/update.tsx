import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  UpdatePostContent,
  GetPostDetail,
  PostCommonImage,
} from "../hook/blog";
import { TPost } from "../type/Type";

const UpdatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const detailId = Number(id);

  const [imageURL, setImageURL] = useState<string | null>(null);

  const {
    mutate: UpdateMutation,
    isError,
    isPending,
  } = useMutation({
    mutationFn: UpdatePostContent,
    onSuccess: () => {
      console.log("데이터 제출 성공");
      navigate("/");
    },
  });

  const { mutate: PostImage } = useMutation({
    mutationFn: PostCommonImage,
    onSuccess: (response) => {
      console.log("사전 이미지 업로드", response);
      setImageURL(response["imageUrl"]);
    },
  });

  const { data: contents } = useQuery({
    queryFn: () => GetPostDetail(detailId),
    queryKey: ["contents"],
  });
  const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onUpLoadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];

      if (file) {
        PostImage(file);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data: TPost) => {
    await UpdateMutation({
      ...data,
      imageUrl: imageURL?.toString(),
      id: detailId,
    });
  };

  if (isPending) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>에러!!</h1>;
  }
  return (
    <div className="flex flex-col items-center gap-10 w-1000">
      <h1 className="text-25">글 수정하기</h1>
      <div className=" w-full min-h-[800px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 h-full"
        >
          <input
            type="text"
            placeholder="제목을 입력해 주세요."
            defaultValue={contents.title}
            {...register("title")}
            className="bg-gray-200 rounded-sm p-2 outline-none"
          />
          <div className="flex flex-col py-7 px-1 border-[1px] rounded-sm h-[90%]">
            <div className="h-600">
              <textarea
                placeholder="내용을 입력하세요."
                defaultValue={contents.content}
                {...register("content")}
                className=" p-2 outline-none resize-none"
              />
              <img
                src={`http://localhost:3000/${contents.imageUrl}`}
                className=" w-[20%]"
              ></img>
            </div>

            <input
              type="file"
              accept="image/png"
              multiple
              onChange={onUpLoadImage}
              className=" px-2 pt-5 border-t-[1px] outline-none"
            />
          </div>

          <button
            className={`w-300 h-50 mx-auto my-5 ${
              isValid ? "bg-pink-400" : "bg-gray-400"
            } rounded-md`}
            disabled={!isValid}
          >
            등록
          </button>
        </form>
      </div>
    </div>
  );
};
export default UpdatePage;
