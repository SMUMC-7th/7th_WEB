import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { PostLogin } from "../hook/blog";
import { useAuthContext } from "../context/AuthContext";

interface IData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useAuthContext();
  const {
    mutate: postInfoMutation,
    isError,
    isPending,
  } = useMutation({
    mutationFn: PostLogin,
    onSuccess: () => {
      console.log("데이터 제출 성공");
      setIsLogin(true);

      navigate("/");
    },
  });
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
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: IData) => {
    postInfoMutation(data);
  };

  if (isPending) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>에러!!</h1>;
  }

  return (
    <div className="w-full flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder=" 이메일을 입력해주세요."
          {...register("email")}
          className="w-300 h-30 rounded-md border border-pink-400 outline-none"
        />
        <input
          type="password"
          placeholder=" 비밀번호를 입력해주세요."
          {...register("password")}
          className="w-300 h-30 rounded-md border border-pink-400 outline-none"
        />
        <button
          className={`${isValid ? "bg-pink-400" : "bg-gray-400"} rounded-md`}
          disabled={!isValid}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
