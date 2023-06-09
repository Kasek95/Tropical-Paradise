import React from "react";
import "./welcomeSection.scss"
import {Link} from "react-router-dom";


const WelcomeSection = () => {

    return (
        <>
           <section className={"welcome"}>
               <h1>Tropical Paradise</h1>
               <p className="header__text">Witamy i zapraszamy do rezerwacji!</p>
               <Link to="/islands" className="header__btn btn-special-animation">Poznaj ofertę</Link>
               <div className="white-block"></div>
           </section>
        </>
    )
}

export default WelcomeSection;