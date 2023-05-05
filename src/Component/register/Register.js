import React from "react";
import "./register.scss"
import {Formik,Form} from "formik";
import CustomInput from "./customInput/CustomInput";
import {advancedSchema} from "./validationUser";
import {Link, Navigate} from "react-router-dom";
import supabase from "../../supabase";

const Register = () => {


    const onSubmit = async (values, actions,e)=> {

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const { data, error } = await supabase.auth.signUp({
            email: values.email,
            password: values.pass1,
            options: {
                data: {
                    userName: values.user,
                    userType: values.adminKey === "Admin" ? "Admin" : "User"
                },
            },
        })


        actions.resetForm()

    }
    return (
        <>
            <section className={"registerMain"}>

                <Formik
                    initialValues={{
                        user: "",
                        email: "",
                        pass1: "",
                        pass2: "",

                    }}
                    validationSchema={advancedSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className={"registration"}>
                            <h2>Register</h2>
                            <div className={"customInput"}>
                                <i className="fa-solid fa-user"></i>
                                <CustomInput
                                    label={`User Name`}
                                    name={"user"}
                                    type={"text"}
                                    placeholder={"Enter your user name!"}
                                />
                            </div>

                            <div className={"customInput"}>

                                <i  className="email fa-regular fa-envelope"></i>
                                <CustomInput
                                    label={"E-mail"}
                                    name={"email"}
                                    type={"email"}
                                    placeholder={"Enter your E-mail"}
                                />

                            </div>
                            <div className={"customInput"}>
                                <i className="fa-solid fa-lock"></i>
                                <CustomInput
                                    label={`Password`}
                                    name={"pass1"}
                                    type={"password"}
                                    placeholder={"Enter your password"}
                                />
                            </div>
                            <div className={"customInput"}>

                                <i className="lock fa-solid fa-lock"></i>
                                <CustomInput
                                    label={`Repeat password`}
                                    name={"pass2"}
                                    type={"password"}
                                    placeholder={"Repeat password"}
                                />
                            </div>


                            <div className={"btnPanel"}>
                                <button className={"btn"}  type={"submit"}>Register</button>
                            </div>
                            <span>If u are Register <Link to={"/Login"}>Login</Link></span>
                        </Form>
                    )}
                </Formik>
            </section>
        </>
    )
}

export default Register;