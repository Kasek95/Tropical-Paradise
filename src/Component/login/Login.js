import React, {useState} from "react";
import "./login.scss"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../features/user";
import supabase from "../../supabase";


const Login = ()=> {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const loginInUser = async (e) => {
        e.preventDefault()
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        if(data.user.email !== "") {
           dispatch(login({user: data.user}))
        } else {
            console.log(error)
        }
        navigate("/Strefa-klienta")
        setPassword("")
        setEmail("")
    }


    return (
        <>
            <section className={"loginMain"}>
                <article className={"formContainer container"}>
                   <form className={"form"}>
                        <h2>Login</h2>
                        <div className={"inputBox"}>
                            <label htmlFor={"Email"}>E-mail</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} name={"Email"} placeholder={"Write your email"} type={"email"} required={"Write e-mail"}/>
                        </div>
                        <div className={"inputBox"}>
                            <label htmlFor={"Password"}>Password</label>
                            <input value={password} onChange={e => setPassword(e.target.value)} placeholder={"Write your password"} type={"password"} required={"Write password"}/>
                        </div>
                       <button onClick={loginInUser} className={"btnLogin"}>Login</button>
                       <span>You are not register <Link to={"/register"}><strong>Register</strong></Link></span>
                   </form>
                </article>
            </section>
        </>
    )

}

export default Login;