import React from "react";
import {useField} from "formik";

const  CustomCheckBox = ({label,...props}) => {
    const [field, meta] = useField(props)


    return (
        <>
               <div className={"checkBox"}>
                   <input {...field} {...props} className={meta.touched && meta.error ? "input error" : "input"}/>
                   <span>Za akceptuj regulamin</span>
               </div>
                {meta.touched && meta.error && <div className={"errorText"}>{meta.error}</div> }

        </>
    )

}
export default CustomCheckBox;