import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field, meta);
    return (
        <div className="mb-4">
            <label htmlFor={field.name}>{label}</label>
            <input
                className={`form-control shadow-none ${
                    meta.touched && meta.error && "is-invalid"
                }`}
                {...field}
                {...props}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    );
};

export default TextField;
