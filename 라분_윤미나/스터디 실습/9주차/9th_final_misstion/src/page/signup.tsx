import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostSignUp } from "../hook/blog";
import { TSignUp } from "../type/Type";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const SignUpPage = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!")
      .required("이메일을 반드시 입력해주세요."),
    password: yup
      .string()
      .matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "대문자, 소문자, 특수문자, 숫자를 모두 포함하세요!"
      )
      .required(),
    role: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    mutate: postSignUpMutation,
    isError,
    isPending,
  } = useMutation({
    mutationFn: PostSignUp,
    onSuccess: (response) => {
      console.log("데이터 제출 성공");
      console.log("API 응답 : ", response);

      navigate("/login");
    },
  });

  const onSubmit = async (data: TSignUp) => {
    postSignUpMutation(data);
  };

  if (isPending) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>에러!!</h1>;
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="이메일을 입력하세요."
          {...register("email")}
          className="w-300 h-30 rounded-md border border-pink-400 outline-none"
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          {...register("password")}
          className="w-300 h-30 rounded-md border border-pink-400 outline-none"
        />
        <p className="text-red-500 text-12">{errors.password?.message}</p>
        <div className="flex gap-9">
          <p>역할</p>
          <label>
            <input type="radio" value="user" {...register("role")} />
            user
          </label>
          <label>
            <input type="radio" value="admin" {...register("role")} />
            admin
          </label>
        </div>

        <button
          className={`${isValid ? "bg-pink-400" : "bg-gray-400"} rounded-md`}
          disabled={!isValid}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
