import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./header.scss"
import { GiPalmTree } from "react-icons/gi";
import {FaBars} from "react-icons/fa"
import {VscChromeClose} from "react-icons/vsc"
import {useSelector} from "react-redux";
import supabase from "../../supabase";
import {login} from "../../features/user";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


const Header = ({apartments}) => {
    const [showMenu,setShowMenu] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const user = useSelector((state) => state.user.value.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOut = async () => {
        await supabase.auth.signOut();
        dispatch(login({user:null}))
        setShowMenu(false)
        navigate("/")
    }

    if(!apartments ) return null
    return (
        <>
            <header>
                <div className={"header-container container"}>
                    <Link className={"logo"} to={"/"}><GiPalmTree className={"iconLogo"}/>Tropical Vacation</Link>

                    <section className={"navigation"}>
                        {showMenu ? <VscChromeClose className={"hamburger"} onClick={()=> setShowMenu(false)}/>  : <FaBars className={"hamburger"} onClick={()=> setShowMenu(true)}/>}
                        <nav className={showMenu ? "nav show" : "nav"}>
                            <a onClick={()=> setShowMenu(false)} href={"#about"}>O nas</a>
                            <a onClick={()=> setShowMenu(false)} href={"#contact"}>Kontakt</a>
                            <Link onClick={()=> setShowMenu(false)} to={"/islands"}>Wyspy</Link>
                            <Link onClick={()=> setShowMenu(false)} to={"/Strefa-klienta"}>Ulubione({apartments.filter(el => el.RomLiked === true).length})</Link>
                            {user === null ? null : <Link to={"/adminPanel"} className={user.email === "admin@gmail.com" ? "admin show" : "admin"}>Admin</Link>}
                            {user === null ? null : <button onClick={logOut} className={"logoutAll"}>Wyloguj</button>}
                        </nav>
                        <div
                            onClick={() => setShowLogin(!showLogin)}
                            className={ "login"}>Login
                            <div
                                onMouseLeave={() => setShowLogin(false)}
                                className={showLogin ? "registerConection show" : "registerConection"}>
                                <Link to={"/Login"}>
                                    Login
                                </Link>
                                <span>
                                    Nie jesteś zarejestrowany?
                                </span>
                                <Link
                                    to={"/Register"}>Rejestracja
                                </Link>
                                <Link
                                    to={"/Strefa-klienta"}>Pulpit
                                </Link>
                            </div>
                        </div>

                    </section>

                </div>
            </header>
        </>
    )

}

export default Header;
