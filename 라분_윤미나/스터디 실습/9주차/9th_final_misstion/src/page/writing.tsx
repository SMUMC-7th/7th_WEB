import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { PostWriting } from "../hook/blog";
import { TPost } from "../type/Type";

const WritingPage = () => {
  const navigate = useNavigate();
  const {
    mutate: postMutation,
    isError,
    isPending,
  } = useMutation({
    mutationFn: PostWriting,
    onSuccess: () => {
      console.log("데이터 제출 성공");
      navigate("/");
    },
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
    postMutation(data);
  };

  if (isPending) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>에러!!</h1>;
  }
  return (
    <div className="flex flex-col items-center gap-10 w-1000">
      <h1 className="text-25">글 쓰기</h1>
      <div className=" w-full min-h-[800px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 h-full"
        >
          <input
            type="text"
            placeholder="제목을 입력해 주세요."
            {...register("title")}
            className="bg-gray-200 rounded-sm p-2 outline-none"
          />
          <div className="flex flex-col py-7 px-1 border-[1px] rounded-sm h-[90%]">
            <textarea
              placeholder="내용을 입력하세요."
              {...register("content")}
              className="h-600 p-2 outline-none resize-none"
            />

            <input
              placeholder="이미지 url을 입력해주세요."
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
export default WritingPage;
