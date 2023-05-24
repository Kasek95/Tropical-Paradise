import React from "react";
import {useField} from "formik";




const  CustomInput = ({label,...props}) => {
    const [field, meta] = useField(props)


    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input id={props.name} {...field} {...props} className={meta.touched && meta.error ? "input error" : "input"}/>
            {meta.touched && meta.error && <div className={"errorText"}>{meta.error}</div> }
        </>
    )

}
export default CustomInput;