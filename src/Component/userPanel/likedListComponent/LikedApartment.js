import React from "react"
import "./likedApartment.scss"
import {Link} from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"
import supabase from "../../../supabase";


const LikedApartment = ({apartment,getRooms,apartments}) => {

    const removeLike = async (id) => {
        const findApartments = apartments.find(el => el.id === id)
        await supabase
            .from("Roms")
            .update({
                RomLiked: !findApartments.RomLiked
            })
            .eq("id", id)
        getRooms()
    }

    return (
        <div key={apartment.id} className={"apartmentLiked"}>
            <AiOutlineClose onClick={() => removeLike(apartment.id)} className={"remove"}/>
           <div className={"infoApartment"}>
               <span>Wyspa: {apartment.Island}</span>
               <img src={apartment.RomImg} alt={apartment.RomInfo}/>
           </div>
            <p>{apartment.RomInfo}</p>
            <div className={"price"}>
                <div className={"border"}></div>
                <div className={"action"}>
                    <span>Cena za noc: {apartment.RomPrice}zł</span>
                    <button className={"removeBtn"}><Link to={`/islands/apartment/${apartment.id}`}>Szczegóły</Link></button>
                </div>
            </div>
        </div>
    )

}

export default LikedApartment;