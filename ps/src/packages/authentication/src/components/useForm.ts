import React, {useState} from "react";

export const useForm = (callback: any, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    //on Change
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    //on Submit
    const onSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
    };
    
    return {
        onChange,
        onSubmit,
        values,
    };
}