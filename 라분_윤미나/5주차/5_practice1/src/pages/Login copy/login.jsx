import * as S from "./login.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!")
      .required("이메일을 반드시 입력해주세요."),
    password: yup
      .string()
      .min(8, "비밀번호는 8~16자 사이로 입력해주세요.")
      .max(16, "비밀번호는 8~16자 사이로 입력해주세요.")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <S.Container>
      <S.H3>로그인</S.H3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type={"email"}
          {...register("email")}
          placeholder="  이메일을 입력해주세요!"
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input
          type={"password"}
          {...register("password")}
          placeholder="  비밀번호를 입력해주세요!"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <S.Button
          disabled={!isValid}
          style={{ background: isValid ? "rgb(255, 0, 119)" : "gray" }}
        >
          로그인
        </S.Button>
      </form>
    </S.Container>
  );
};

export default LoginPage;
