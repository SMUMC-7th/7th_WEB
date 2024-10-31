const emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;

function validateUser(values) {
    const errors = {
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
    };

    // 이메일 유효성 검사
    if (!values.email) {
        errors.email = '이메일을 입력해주세요.';
    } else if (!emailPattern.test(values.email)) {
        errors.email = '올바른 이메일 형식이 아닙니다. 다시 확인해주세요!';
    }

    // 비밀번호 유효성 검사
    if (!values.password) {
        errors.password = '비밀번호를 입력해주세요.';
    } else if (values.password.length < 8 || values.password.length > 16) {
        errors.password = '비밀번호는 8 ~ 16자 사이로 입력해주세요.';
    }

    // 비밀번호 확인 유효성 검사
    if (!values.confirmPassword) {
        errors.confirmPassword = '비밀번호 확인을 입력해주세요.';
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword =
            '비밀번호가 일치하지 않습니다. 다시 입력해주세요!';
    }

    // 성별 유효성 검사
    if (!values.gender) {
        errors.gender = '성별을 반드시 선택해주세요.';
    }

    // 출생 년도 유효성 검사
    if (!values.birthYear) {
        errors.birthYear = '출생 년도를 입력해주세요.';
    } else if (!/^\d{4}$/.test(values.birthYear)) {
        errors.birthYear = '년도를 정확하게 입력해주세요.';
    }

    // 출생 월 유효성 검사
    if (!values.birthMonth) {
        errors.birthMonth = '출생 월을 선택해주세요.';
    }

    // 출생 일 유효성 검사
    if (!values.birthDay) {
        errors.birthDay = '출생 일을 선택해주세요.';
    }

    return errors;
}

function validateLogin(values) {
    return validateUser(values);
}

function validateSignup(values) {
    return validateUser(values);
}

export { validateLogin, validateSignup };
