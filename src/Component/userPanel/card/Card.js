import React from "react";
import "./card.scss"
import supabase from "../../../supabase";
import {toast} from 'react-toastify';

const Card = ({payments,user,showForm,getPayments}) => {

    const removeCard = async (id) => {
        await supabase.from("payments")
            .delete()
            .eq("id", id)
        getPayments()
        toast.success('Usunąłeś kartę!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    if(!payments || !user) return null
    const userPayment = payments.filter(el => el.userId === user.id)
    return (
        <section className={"paymentMethod"}>
            <h3>Twoje Metody Płatności</h3>
            {userPayment.map(el => (
                <div key={el.id} className={"method"}>
                    <span>Imię i Nazwisko: {el.userOwner}</span>
                    <span>Karta: {el.cardNumber.slice(0,4)}{(el.cardNumber.slice(-13,-1).split("").map((el, idx )=> <span key={idx}>*</span>))}</span>
                    <button onClick={()=> removeCard(el.id)} className={"removeCard"}>Usuń</button>
                </div>
            ))}
            <button onClick={showForm} className={"add"}>Dodaj Metodę</button>
        </section>
    )

}
export default Card;