import { useEffect, useState } from "react";

interface IUseFrom {
  initialValue: Record<string, string>;
  validate: (values: Record<string, string>) => Record<string, string>;
  //Record<K, T>는 객체의 키와 값에 특정 타입을 지정할 때 사용
}

function useForm({ initialValue, validate }: IUseFrom) {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChangeInput = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };
  const handleBlur = (name: string) => {
    setTouched({ ...touched, [name]: true });
  };

  const getTextInputProps = (name: string & number) => {
    const value = values[name];
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      // onChange 이벤트의 타입을 지정할 때 자주 사용되는 타입
      handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [validate, values]);

  return { values, errors, touched, getTextInputProps, isValid };
}

export default useForm;
