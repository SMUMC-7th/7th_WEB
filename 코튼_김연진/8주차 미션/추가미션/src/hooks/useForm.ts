import { useEffect, useState } from 'react';

function useForm({
    initialValue,
    validate,
}: {
    initialValue: { [key: string]: string };
    validate: (values: { [key: string]: string }) => { [key: string]: string };
}) {
    const [values, setValues] = useState(initialValue);

    const [touched, setTouched] = useState({});

    const [errors, setErrors] = useState({});

    const handleChangeInput = (name: string, value: string) => {
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleBlur = (name: string) => {
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    const getTextInputProps = (name: string) => {
        const value = values[name];
        const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInput(name, event.target.value);
        const onBlur = () => handleBlur(name);
        return { value, onChange, onBlur };
    };

    useEffect(() => {
        const newErrors = validate(values);
        console.log(newErrors);
        setErrors(newErrors);
    }, [validate, values]);

    return { values, errors, touched, getTextInputProps };
}

export default useForm;
