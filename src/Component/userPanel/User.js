import React, {useState} from "react";
import "./userPanel.scss"
import UserMenu from "./menuPanel/UserMenu";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {BsCheck} from "react-icons/bs"
import {BsSuitHeartFill} from "react-icons/bs"
import {AiOutlineRight} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import Slider from "./slider/Slider";
import LikedApartment from "./likedListComponent/LikedApartment";
import UserReservation from "./userReservation/UserReservation";
import PaymentInfo from "./paymentInfo/PaymentInfo";
import Card from "./card/Card";
import CardForm from "./cardForm/CardForm";

const  User = ({apartments,reservation,getRooms,getReservation,payments,getPayments}) => {
    const user = useSelector((state) => state.user.value.user)
    const [showReservation, setShowReservation] = useState(false)
    const [showPulpit,setShowPulpit] = useState(true)
    const [showLikedApartments, setShowLikedApartments] = useState(false)
    const [isDisplayPayment, setIsDisplayPayment] = useState(false)
    const [isDisplayCardForm, setIsDisplayCardForm] = useState(false)
    const setDisplayCardForm = () => {
        setIsDisplayCardForm(true)
    }

    const showLikedRoms = () => {
        setShowLikedApartments(true)
        setShowPulpit(false)
        setShowReservation(false)
        setIsDisplayPayment(false)
    }
    const displayPulpit = () => {
        setShowPulpit(true)
        setShowReservation(false)
        setShowLikedApartments(false)
        setIsDisplayPayment(false)
    }
    const setReservation = () => {
        setShowReservation(true)
        setShowPulpit(false)
        setShowLikedApartments(false)
        setIsDisplayPayment(false)
    }
    const setPayment = () => {
        setIsDisplayPayment(true)
        setShowReservation(false)
        setShowPulpit(false)
        setShowLikedApartments(false)
    }
   if(!reservation) return null

    return (
        <>

            <main className={"UserPanel"}>

                <section className={"userContainer"}>
                    <UserMenu displayPayment={setPayment} displayPulpit={displayPulpit} showLikedRoms={showLikedRoms} setReservation={setReservation} user={user} apartments={apartments}/>

                    <section className={showPulpit ? "pulpit container show" : "pulpit container"}>
                        <article className={"containerClient"}>
                            <div className={"login"}>
                                <h3>Dzień Dobry</h3>
                                <span className={"infoSpan"}>Konto w Strefie Klienta to korzyści:</span>
                                <ul className={"listOfProfit"}>
                                    <li><BsCheck className={"icon-check"}/>szybki dostęp do wszystkich rezerwacji</li>
                                    <li><BsCheck className={"icon-check"}/>możesz, dokonywać rezerwacji!</li>
                                    <li><BsCheck className={"icon-check"}/>parking, ubezpieczenie i inne usługi dodatkowe</li>
                                </ul>
                                <button className={"btnNavigate"}><Link to={"/Login"}>Zaloguj się</Link></button>
                            </div>
                            <div className={"linkToReservation"}>
                                <h3>Ulubione</h3>
                                <span className={"favorites"}>
                                    <BsSuitHeartFill className={"likedIcon"}/>
                                    Twoja Lista
                                    {!apartments ? null :  <div>{apartments.filter(el => el.RomLiked === true).length === 0 ? <span className={"liked"}>0</span> :  <span className={"liked"}>{apartments.filter(el=> el.RomLiked === true).length}</span>}</div>}
                                    <AiOutlineRight onClick={showLikedRoms} className={"right"}/>
                                </span>
                                <div className={"borderBottom"}></div>
                                <div className={"navigateToRegister"}>
                                    <AiOutlineUser className={"userIcon"}/>
                                    <Link to={"/register"}>Załóż konto</Link>aby tworzyć listy ulubionych ofert!</div>
                            </div>
                        </article>
                        <article className={"moreOfert"}>
                            <h3>Nasze Oferty</h3>

                            <div className={"sliderOfert"}>
                               <Slider apartments={apartments}/>
                                <Slider apartments={apartments}/>
                            </div>

                        </article>
                    </section>

                    <section className={showLikedApartments ? "likedApartments container show" : "likedApartments container"}>
                       <h3>Twoja Lista</h3>
                        {!apartments ? null : apartments.filter(el => el.RomLiked === true)
                            .map(el => (
                                <LikedApartment apartment={el} apartments={apartments} getRooms={getRooms}/>
                            ))
                        }
                    </section>

                    <section className={showReservation ? "userAction container show" : "userAction container"}>
                        <h3>Twoje Rezerwacje</h3>
                        {user === null ? null : reservation.filter(el => el.userId === user.id)
                            .map(el => (
                                <UserReservation getReservation={getReservation} apartaments={apartments} reservation={el}/>
                            ))}
                    </section>
                    <section className={isDisplayPayment ? "payment container show" : "payment container"}>
                        <h3>Metody Płatności</h3>
                        {payments.length === 0 ? <PaymentInfo showCardForm={setDisplayCardForm}/> : <Card/>}
                         <section className={isDisplayCardForm ? "addCardForm show" : "addCardForm"}>
                              <CardForm/>
                         </section>
                    </section>
                </section>
            </main>
        </>
    )

}

export default User;