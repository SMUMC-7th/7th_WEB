import * as S from "../Login/Login.style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 맞지 않습니다 :(")
    .required("이메일을 반드시 입력해주세요"),
  password: yup
    .string()
    .required("비밀번호는 8 ~ 16자 사이로 입력해주세요 :(")
    .min(8, "최소 8자 이상 입력해주세요")
    .max(16, "최대 16자까지 가능합니다"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 다릅니다")
    .required("비밀번호 확인은 필수 입력요소입니다"),
  gender: yup.string().required("성별을 선택해주세요"),
  birthdate: yup
    .date()
    .required("생년월일을 입력해주세요")
    .nullable()
    .typeError("유효한 날짜를 입력해주세요"),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    alert("회원가입에 성공하였습니다👏🏻");
    navigate("/login");
  };

  return (
    <S.LoginContainer>
      <h2>회원가입</h2>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type={"email"}
          placeholder="이메일을 입력해주세요!"
          {...register("email")}
        />
        {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}

        <input
          type={"password"}
          placeholder="비밀번호를 입력해주세요!"
          {...register("password")}
        />
        {errors.password && (
          <S.ErrorText>{errors.password.message}</S.ErrorText>
        )}

        <input
          type={"password"}
          placeholder="비밀번호를 확인해주세요"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm && (
          <S.ErrorText>{errors.passwordConfirm.message}</S.ErrorText>
        )}

        <S.GenderSection>
          <label>
            <input type="radio" value="male" {...register("gender")} />
            남성
          </label>
          <label>
            <input type="radio" value="female" {...register("gender")} />
            여성
          </label>
          {errors.gender && <S.ErrorText>{errors.gender.message}</S.ErrorText>}
        </S.GenderSection>

        <S.BirthdateSection>
          <label>생년월일</label>
          <input type="date" {...register("birthdate")} />
          {errors.birthdate && (
            <S.ErrorText>{errors.birthdate.message}</S.ErrorText>
          )}
        </S.BirthdateSection>

        <button type="submit">회원가입</button>
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default Signup;
