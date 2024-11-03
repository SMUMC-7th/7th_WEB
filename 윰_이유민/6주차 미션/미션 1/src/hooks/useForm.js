import { useState, useEffect } from 'react';

function useForm({ initialValue, validate }) {
  const [values, setValues] = useState(initialValue);

  const [touched, setTouched] = useState({});

  const [errors, setErrors] = useState({});

  const handleChangeInput = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (name) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTestInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, event.target.value);
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
