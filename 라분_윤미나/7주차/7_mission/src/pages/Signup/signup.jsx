import * as S from "./signup.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorLottie from "../../components/Error/Error";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
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
    password_check: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호 검증 또한 필수 입력요소입니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        email: data.email,
        password: data.password,
        passwordCheck: data.password_check,
      });

      console.log("데이터 제출 : ", data);
      console.log("API 응답: ", response.data);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        <ErrorLottie />;
        console.error("에러 발생:", error.response.data); // 서버가 제공하는 자세한 오류 메시지
      } else {
        <ErrorLottie />;
        console.error("에러 발생:", error.message); // 기타 오류 메시지
      }
    }
  };

  return (
    <S.Container>
      <S.H3>회원가입</S.H3>
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
        <input
          type={"password"}
          {...register("password_check")}
          placeholder="  비밀번호를 다시 입력해주세요!"
        />
        <p style={{ color: "red" }}>{errors.password_check?.message}</p>

        <S.Button
          type="submit"
          disabled={!isValid}
          style={{ background: isValid ? "rgb(255, 0, 119)" : "gray" }}
        >
          제출
        </S.Button>
      </form>
    </S.Container>
  );
};

export default SignUpPage;
