import React from "react";
import "./login.scss"
import {Link} from "react-router-dom";


const Login = ()=> {

    return (
        <>
            <section className={"loginMain"}>
                <article className={"formContainer container"}>
                   <form className={"form"}>
                        <h2>Login</h2>
                        <div className={"inputBox"}>
                            <label htmlFor={"Email"}>E-mail</label>
                            <input name={"Email"} placeholder={"Write your email"} type={"email"} required={"Write e-mail"}/>
                        </div>
                        <div className={"inputBox"}>
                            <label htmlFor={"Password"}>Password</label>
                            <input placeholder={"Write your password"} type={"password"} required={"Write password"}/>
                        </div>
                       <button className={"btnLogin"}>Login</button>
                       <span>You are not register <Link to={"/register"}><strong>Register</strong></Link></span>
                   </form>
                </article>
            </section>
        </>
    )

}

export default Login;