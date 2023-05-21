import React from "react";
import "./userReservation.scss"
import supabase from "../../../supabase";


const UserReservation = ({reservation,apartaments,getReservation}) => {

    const deleteReservation = async (id) => {
        await supabase
            .from("book")
            .delete()
            .eq("id",id)
        getReservation()
    }


    if(!reservation || !apartaments) return null

    const findApartament = apartaments.find(el => el.id === reservation.apartmentId)
    return (

            <div key={reservation.id} className={"reservationContainer"}>
                <span>Zameldowanie: {reservation.StartDate.split("T")[0]}</span>
                <span>Wymeldowanie: {reservation.EndDate.split("T")[0]}</span>
                <span>Apartament nr: {reservation.apartmentId}</span>
                <span>Cena za noc:{findApartament.RomPrice} zł</span>
                <span>Wyspa: {findApartament.Island}</span>
                <button onClick={()=> deleteReservation(reservation.id)}>Anuluj Rezerwację</button>
            </div>

    )

}
export default UserReservation;