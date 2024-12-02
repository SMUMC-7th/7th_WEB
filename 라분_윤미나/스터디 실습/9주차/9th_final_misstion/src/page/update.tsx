import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";

import { UpdatePostContent, GetPostDetail } from "../hook/blog";
import { TPost } from "../type/Type";

const UpdatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const detailId = Number(id);
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

  const { data: contents } = useQuery({
    queryFn: () => GetPostDetail(detailId),
    queryKey: ["contents"],
  });
  const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
    imageUrl: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: TPost) => {
    await UpdateMutation({ ...data, id: detailId });
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
            <textarea
              placeholder="내용을 입력하세요."
              defaultValue={contents.content}
              {...register("content")}
              className="h-600 p-2 outline-none resize-none"
            />

            <input
              placeholder="이미지 url을 입력해주세요."
              defaultValue={contents.imageUrl}
              {...register("imageUrl")}
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
