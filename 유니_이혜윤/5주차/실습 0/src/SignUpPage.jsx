import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUpPage = () => {
  const schema = yup.object().shape({
    // 이메일 - 문자열, 필수입력
    email: yup.string().email().required("이메일을 반드시 입력해주세요!"),
    // 비밀번호 - 문자열, 최소 8, 최대 16, 필수입력
    password: yup
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다!")
      .max(16, "비밀번호는 16자 이하여야 합니다!")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("데이터 제출");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type={"email"} {...register("email")} />
      <p style={{ color: "red" }}>{errors.email?.message}</p>
      <input type={"password"} {...register("password")} />
      <p style={{ color: "red" }}>{errors.password?.message}</p>
      <input type={"submit"} />
    </form>
  );
};

export default SignUpPage;
