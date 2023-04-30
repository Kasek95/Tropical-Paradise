import React, {useState} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {FaStar} from "react-icons/fa";

const IslandTikiTaki = ({apartments,setToLike}) => {

    if(!apartments) return null
    return (
        <>
            {apartments.filter(el => el.Island === "Tiki Taki")
                .map(element => (
                    <div key={element.id} className={"singielApartment"}>
                        {element.RomLiked ? <AiFillHeart onClick={()=> setToLike(element.id)} className={"heart red"}/> : <AiOutlineHeart onClick={() => setToLike(element.id)} className={"heart"}/>}
                        <div className={"imgContainer"}>
                            <img src={element.RomImg} alt={element.RomInfo}/>
                        </div>

                        <div className={"location"}>
                            <span>Wyspa {element.Island}</span>
                            <span><FaStar/> {element.rating}</span>
                        </div>
                        <span className={"price"}>Cena za noc: {element.RomPrice} zł</span>
                    </div>
                ))
            }
        </>
    )

}

export default IslandTikiTaki;