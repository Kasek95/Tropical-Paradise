import React from "react";
import "./allOffers.scss"
import {FaStar} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {Link} from "react-router-dom"




const AllOffers = ({apartments,setToLike}) => {


    if(!apartments) return null
    return (
        <>
            {apartments.map(element => (
                <div key={element.id} className={"singielApartment"}>
                    {element.RomLiked ? <AiFillHeart onClick={()=> setToLike(element.id)} className={"heart red"}/> : <AiOutlineHeart onClick={() => setToLike(element.id)} className={"heart"}/>}
                    <div className={"imgContainer"}>
                          <img src={element.RomImg} alt={element.RomInfo}/>
                    </div>

                    <div className={"location"}>
                        <span>Wyspa {element.Island}</span>
                        <span><FaStar/> {element.rating}</span>
                    </div>
                    <div className={"ofert"}>
                        <span className={"price"}>Cena za noc: {element.RomPrice} zł</span>
                        <button className={"checkOfert"}><Link to={`/islands/apartment/${element.id}`}>Sprawdź Ofertę</Link></button>
                    </div>
                </div>

            ))
            }
        </>
    )

}

export default AllOffers;