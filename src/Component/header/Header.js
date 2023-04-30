import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./header.scss"
import { GiPalmTree } from "react-icons/gi";
import {FaBars} from "react-icons/fa"
import {VscChromeClose} from "react-icons/vsc"


const Header = ({apartments}) => {
    const [showMenu,setShowMenu] = useState(false)
    const [showLogin, setShowLogin] = useState(false)


    if(!apartments) return null
    return (
        <>
            <header>
                <div className={"header-container container"}>
                    <Link className={"logo"} to={"/"}><GiPalmTree className={"iconLogo"}/>Tropical Vacation</Link>

                    <section className={"navigation"}>
                        {showMenu ? <VscChromeClose className={"hamburger"} onClick={()=> setShowMenu(false)}/>  : <FaBars className={"hamburger"} onClick={()=> setShowMenu(true)}/>}
                        <nav className={showMenu ? "nav show" : "nav"}>
                            <a onClick={()=> setShowMenu(false)} href={"#about"}>About</a>
                            <a onClick={()=> setShowMenu(false)} href={"#contact"}>Contact</a>
                            <Link onClick={()=> setShowMenu(false)} to={"/islands"}>Islands</Link>
                            <Link onClick={()=> setShowMenu(false)} to={"/Strefa-klienta"}>Favorites({apartments.filter(el => el.RomLiked === true).length})</Link>
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
                                    You are not register?
                                </span>
                                <Link
                                    to={"/Register"}>Register
                                </Link>
                                <Link
                                    to={"/Pulpit"}>Pulpit
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
