import React from "react";
import "./singielApartments.scss"
import {AiFillDelete} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import supabase from "../../../supabase";

const SingielApartment = ({apartment,getApartments}) => {

    const deleteApartment = async(id) => {
        await supabase.from("Roms")
            .delete()
            .eq("id", id)
        getApartments()
    }

    return (
        <div key={apartment.id} className={"apartmentCont"}>
            <div className={"apartmentInfo"}>
                <p>Wyspa: {apartment.Island}</p>
                <span>Cena za noc: <strong>{apartment.RomPrice}$</strong></span>
                <span>Ilość Osób w pokoju: {apartment.NumberOfGuest} osoby</span>
            </div>
            <div className={"btnContainer"}>
                <button  className={"btn"}><AiFillDelete onClick={() => deleteApartment(apartment.id)}/></button>
                <button className={"btn"}><AiFillEdit/></button>
            </div>
        </div>
    )

}
export default SingielApartment;