import React, {useState} from "react";

export const useForm = (callback: any, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    //const [error, setError] = useState(null);

    //on Change
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    //on Submit
    const onSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
    };
    
    return {
        onChange,
        onChangeSelect,
        onChangeTextArea,
        onSubmit,
        values,
    };
}