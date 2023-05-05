import React from "react";
import {useField} from "formik";




const  CustomInput = ({label,...props}) => {
    const [field, meta] = useField(props)


    return (
        <>
            <label>{label}</label>
            <input  {...field} {...props} className={meta.touched && meta.error ? "input error" : "input"}/>
            {meta.touched && meta.error && <div className={"errorText"}>{meta.error}</div> }
        </>
    )

}
export default CustomInput;