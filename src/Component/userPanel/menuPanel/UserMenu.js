import React, {useState} from "react";
import {HiOutlineSquares2X2} from "react-icons/hi2";
import {AiFillHeart} from "react-icons/ai";
import {BsCalendar3} from "react-icons/bs";
import {FaWallet} from "react-icons/fa";
import "./userMenu.scss"


const UserMenu = ({user,apartments}) => {



    if(!apartments) return null
    return (
        <>
            <div className={"menu__user"}>
                <div className={"box"}>
                    <HiOutlineSquares2X2 className={"icon"}/>
                    <span>Pulpit</span>
                </div>
                <div className={"box"}>
                    <AiFillHeart  className={"icon"}/>
                    <span>ulubione   {apartments.filter(el => el.RomLiked === true).length === 0 ? null :  <span className={"liked"}>{apartments.filter(el=> el.RomLiked === true).length}</span>}</span>


                </div>

                <div  className={"box"}>
                    <BsCalendar3  className={user !== null  ?"icon" : "icon grey"}/>
                    <button
                        disabled={user !== null ? "" : "disabled"}
                        type={"button"}
                        className={user !== null ? "btn" : "btn grey"}
                    >
                        Twoje Rezerwacje
                    </button>
                </div>

                <div className={"box"}>
                    <FaWallet  className={user !== null ? "icon" : "icon grey"}/>
                    <button
                        disabled={user !== null ? "" : "disabled"}
                        type={"button"}
                        className={user !== null ? "btn" : "btn grey"}
                    >
                        Płatności
                    </button>
                </div>
            </div>
        </>
    )

}

export default UserMenu;