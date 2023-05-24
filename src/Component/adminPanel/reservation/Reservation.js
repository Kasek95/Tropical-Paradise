import React from "react"
import "./reservation.scss"
import {SlClose} from "react-icons/sl"
import supabase from "../../../supabase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reservation = ({el, getReservation}) => {

     const removeReservation = async(id) => {
         await supabase.from("book")
             .delete()
             .eq("id",id)
         getReservation()
         toast.success('Usunąłeś rezerwację!', {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
         })
     }
    return (
        <div className={"singielReservationContainer"} key={el.id}>
            <SlClose onClick={()=> removeReservation(el.id)} className={"removeReservation"}/>
            <span>Zakwaterowanie: {el.StartDate.split("T")[0]}</span>
            <span>Wymeldowanie: {el.EndDate.split("T")[0]}</span>
            <span>Rezerwacji dokonał użytkownik o id: {el.userId}</span>
            <span>Dane kontaktowe: {el.userEmail}</span>
            <span>Apartament nr: {el.apartmentId}</span>

        </div>
    )

}

export default Reservation