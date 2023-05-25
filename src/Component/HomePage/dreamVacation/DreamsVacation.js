import React from "react"
import "./dreamsvacation.scss"
import paradise from "../../../assets/paradise-598201_640.jpg"
import bora from "../../../assets/bora-bora-3023437_640.jpg"


const DreamsVacation = ( ) => {

    return (
        <section className="dreams">
            <div className="container wrapper">
                <h2 className="section-heading">Spełniaj swoje marzenia</h2>
                <div className="dreams_box">
                    <div className="dreams__box-img">
                        <img src={paradise} alt="Domki nad oceanem" className="dreams__img"/>
                    </div>
                    <div className="dreams__box-text">
                        <h3 className="dreams__title">Wymarzone wakacje</h3>
                        <p className="dreams__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic id
                            nihil
                            sequi asperiores aspernatur illo fugit facere doloremque laudantium? Ipsum at sint optio
                            recusandae. Doloremque mollitia consequatur quidem minus possimus!</p>
                    </div>
                </div>
                <div className="dreams__box">
                    <div className="dreams__box-img dreams__box-img--right">
                        <img src={bora} alt="Domki nad oceanem na tle góry"
                             className="dreams__img"/>
                    </div>
                    <div className="dreams__box-text dreams__box-text--right">
                        <h3 className="dreams__title">Niezapomiane przygody</h3>
                        <p className="dreams__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic id
                            nihil
                            sequi asperiores aspernatur illo fugit facere doloremque laudantium? Ipsum at sint optio
                            recusandae. Doloremque mollitia consequatur quidem minus possimus!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DreamsVacation;

