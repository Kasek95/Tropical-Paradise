import React from "react";
import "./ofert.scss"
import  option1 from "../../../assets/option1.jpg"
import option2 from "../../../assets/option2.jpg"
import option3 from "../../../assets/option3.jpg"
import {Link} from "react-router-dom";

const Ofert = () => {

    return (
        <section id={"about"} className="offers section-padding section" >
            <h2 className="section-heading">Oferty</h2>
            <div className="container ofert-container">

                <div className="offers__box">

                    <div className="offers__option">
                        <img src={option1} alt="Impreza z dziećmi nad wodą" className="offers__option-img"/>
                            <div className="offers__option-info">
                                <h3 className="offers__option-heading">Wyjazd z dziećmi</h3>
                                <p className="offers__option-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Nisi
                                    quasi, iste unde repellendus vel aspernatur maxime hic reiciendis tempore
                                    consequuntur.
                                </p>
                                <p className="offers__option-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.</p>
                                <button className="offers__option-btn btn-special-animation"><Link to={"/islands"}>Wybierz</Link></button>
                            </div>
                    </div>
                    <div className="offers__option">
                        <img src={option2} alt="Wypad z kumplami/" className="offers__option-img offers__option-img--right"/>
                            <div className="offers__option-info">
                                <h3 className="offers__option-heading">Wypad z kumplami</h3>
                                <p className="offers__option-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Nisi
                                    quasi, iste unde repellendus vel aspernatur maxime hic reiciendis tempore
                                    consequuntur.
                                </p>
                                <p className="offers__option-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.</p>
                                <button className="offers__option-btn btn-special-animation"><Link to={"/islands"}>Wybierz</Link></button>
                            </div>
                    </div>
                    <div className="offers__option">
                        <img src={option3} alt="Tylko we dwoje" className="offers__option-img"/>
                            <div className="offers__option-info">
                                <h3 className="offers__option-heading">Tylko we dwoje</h3>
                                <p className="offers__option-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Nisi
                                    quasi, iste unde repellendus vel aspernatur maxime hic reiciendis tempore
                                    consequuntur.
                                </p>
                                <p className="offers__option-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.</p>
                                <button className="offers__option-btn btn-special-animation"><Link to={"/islands"}>Wybierz</Link></button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ofert;

