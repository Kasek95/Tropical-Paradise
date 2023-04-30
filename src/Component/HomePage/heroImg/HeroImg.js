import React from "react"
import "./heroImg.scss"

const HeroImg = () => {

    return (
        <>
            <section className={"hero-img"}>
                <div className="white-block-left"></div>
                <div className="white-block-right"></div>
                <p className="hero-img__title">Tropical Paradise</p>
                <hr></hr>
                <p className="hero-img__text">Jedyne takie miejsce na ziemi</p>
                <hr></hr>
            </section>
        </>
    )

}
export default HeroImg;