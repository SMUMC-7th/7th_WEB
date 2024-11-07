import { useState, useEffect } from 'react';

interface UseFormProps<T extends { [key: string]: string }> {
  initialValue: T;
  validate: (values: T) => { [key in keyof T]?: string };
}

interface useFormReturn<T> {
  values: T;
  errors: { [key in keyof T]?: string };
  touched: { [key in keyof T]: boolean };
  getTestInputProps: (name: keyof T) => {
    value: T[keyof T];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
}

function useForm<T extends { [key: string]: string }>({
  initialValue,
  validate,
}: UseFormProps<T>): useFormReturn<T> {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState<{ [key in keyof T]: boolean }>(
    {} as { [key in keyof T]: boolean }
  );
  const [errors, setErrors] = useState<{ [key in keyof T]?: string }>({});

  const handleChangeInput = (name: keyof T, value: string) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (name: keyof T) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTestInputProps = (name: keyof T) => {
    const value = values[name];
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [validate, values]);

  return { values, errors, touched, getTestInputProps };
}

export default useForm;
