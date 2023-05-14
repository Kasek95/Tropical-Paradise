import React, {useState} from "react";
import {HiOutlineSquares2X2} from "react-icons/hi2";
import {AiFillHeart} from "react-icons/ai";
import {BsCalendar3} from "react-icons/bs";
import {FaBars, FaWallet} from "react-icons/fa";
import "./userMenu.scss"
import supabase from "../../../supabase";
import {login} from "../../../features/user";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {VscChromeClose} from "react-icons/vsc";


const UserMenu = ({user,apartments,setReservation,showLikedRoms, displayPulpit,displayPayment}) => {
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const [showUserMenu, setShowUserMenu] = useState()

    const logOut = async () => {
        await supabase.auth.signOut();
        dispatch(login({user:null}))
        navigate("/")
    }

    if(!apartments) return null
    return (
        <>
            <div className={"menu__user"}>
                {showUserMenu ? <VscChromeClose className={"hamburger"} onClick={()=> setShowUserMenu(false)}/>  : <FaBars className={"hamburger"} onClick={()=> setShowUserMenu(true)}/>}
                <div className={showUserMenu ? "userNav show" : "userNav"}>
                    <div onClick={displayPulpit} className={"box"}>
                        <HiOutlineSquares2X2 className={"icon"}/>
                        <span>Pulpit</span>
                    </div>
                    <div onClick={showLikedRoms} className={"box"}>
                        <AiFillHeart  className={"icon"}/>
                        <span>ulubione   {apartments.filter(el => el.RomLiked === true).length === 0 ? null :  <span className={"liked"}>{apartments.filter(el=> el.RomLiked === true).length}</span>}</span>
                    </div>

                    <div  className={"box"}>
                        <BsCalendar3  className={user !== null && user.email !== "admin@gmail.com" ?"icon" : "icon grey"}/>
                        <button
                            disabled={user !== null && user.email !== "admin@gmail.com" ? "" : "disabled"}
                            type={"button"}
                            className={user !== null && user.email !== "admin@gmail.com" ? "btn" : "btn grey"}
                            onClick={setReservation}
                        >
                            Twoje Rezerwacje
                        </button>
                    </div>

                    <div className={"box"}>
                        <FaWallet  className={user !== null && user.email !== "admin@gmail.com" ? "icon" : "icon grey"}/>
                        <button
                            disabled={user !== null && user.email !== "admin@gmail.com" ? "" : "disabled"}
                            type={"button"}
                            className={user !== null && user.email !== "admin@gmail.com" ? "btn" : "btn grey"}
                            onClick={displayPayment}
                        >
                            Płatności
                        </button>
                    </div>
                </div>
                <div className={"boxBtn"}>
                    <button disabled={user !== null && user.email !== "admin@gmail.com" ? "" : "disabled"} onClick={logOut} className={user !== null && user.email !== "admin@gmail.com" ? "logout" : "logout grey"}>Logout</button>
                </div>
            </div>
        </>
    )

}

export default UserMenu;