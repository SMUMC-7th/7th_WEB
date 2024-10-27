const emailPattern = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]+/;

// values: {email: , password: }
function validateUser(values) {
  const errors = {};

  // 이메일 유효성 검사
  if (!values.email) {
    errors.email = '이메일을 반드시 입력해주세요.';
  } else if (emailPattern.test(values.email) === false) {
    errors.email = '올바른 이메일 형식이 아닙니다. 다시 확인해주세요!';
  }

  // 비밀번호 유효성 검사
  if (!values.password) {
    errors.password = '비밀번호는 필수 입력 요소입니다.';
  } else if (values.password.length < 8) {
    errors.password = '비밀번호는 8자 이상으로 입력해주세요!';
  } else if (values.password.length > 16) {
    errors.password = '비밀번호는 16자 이하로 입력해주세요!';
  }

  return errors;
}

function validateLogin(values) {
  return validateUser(values);
}

function validateSignup(values) {
  const errors = validateUser(values);

  // 비밀번호 확인 유효성 검사
  if (!values.passwordCheck) {
    errors.passwordCheck = '비밀번호 검증 또한 필수 입력 요소입니다.';
  } else if (values.passwordCheck !== values.password) {
    errors.passwordCheck = '비밀번호가 일치하지 않습니다.';
  }

  return errors;
}

export { validateLogin, validateSignup };
