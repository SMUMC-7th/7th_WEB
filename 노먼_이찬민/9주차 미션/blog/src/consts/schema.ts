import * as yup from "yup";
import { REGEX } from "./regex";
const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .matches(REGEX.email, "이메일 형식이 맞지 않습니다.") // 첫 매개변수: 패턴, 두번째 배개변수: 오류문자열
    .required("이메일을 반드시 입력해주세요."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .max(16, "비밀번호는 16자 이하여야 합니다.")
    .required(),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 다릅니다.")
    .required(),
});

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(REGEX.email, "이메일 형식이 맞지 않습니다.") // 첫 매개변수: 패턴, 두번째 배개변수: 오류문자열
    .required("이메일을 반드시 입력해주세요."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .max(16, "비밀번호는 16자 이하여야 합니다.")
    .required(),
});
export { SignUpSchema, LoginSchema };
