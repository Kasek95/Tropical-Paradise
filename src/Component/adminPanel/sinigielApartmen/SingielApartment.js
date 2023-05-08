import React, {useState} from "react";
import "./singielApartments.scss"
import {AiFillDelete} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import supabase from "../../../supabase";

const SingielApartment = ({apartment,getApartments}) => {
    const [isDisplayForm, setIsDisplayForm] = useState(false)
    const [editApartment, setEditApartment] = useState({
        id: "",
        RomInfo: "",
        RomPrice: "",
        RomImg: "",
        NumberOfGuest: "",
        Island: "",

    })

    const getEditApartment= (apartment) => {
        setEditApartment({
            id: apartment.id,
            RomInfo: apartment.RomInfo,
            RomPrice: apartment.RomPrice,
            RomImg: apartment.RomImg,
            NumberOfGuest: apartment.NumberOfGuest,
            Island:apartment.Island,

        })
        setIsDisplayForm(true)
    }

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
                <button onClick={() => getEditApartment(apartment)} className={"btn"}><AiFillEdit/></button>
            </div>
            <form className={isDisplayForm ? "editApartment show" : "editApartment"}>
                   <button type={"reset"} onClick={()=> setIsDisplayForm(false)} className={"closeForm"}><i className="fa-solid fa-x"></i></button>
            </form>
        </div>
    )

}
export default SingielApartment;