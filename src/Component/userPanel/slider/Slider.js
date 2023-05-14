import React from "react";
import {Link} from "react-router-dom";


const Slider = ({apartments}) => {
    if(!apartments) return null
    return (

            <article className={"slide-carousel"}>
                {apartments.map(el => (
                    <div key={el.id} className={"ofertContainer"}>
                        <img src={el.RomImg} alt={el.RomInfo}/>
                        <h4>Wyspa: {el.Island}</h4>
                        <div className={"infoCont"}>
                            <span>Cena za noc: {el.RomPrice} zł</span>
                            <span>Ilość osób: {el.NumberOfGuest}</span>
                        </div>
                        <button className={"checkOfert"}><Link to={`/islands/apartment/${el.id}`}>Sprawdź Ofertę</Link></button>
                    </div>
                ))}
            </article>


    )
}
export default Slider


