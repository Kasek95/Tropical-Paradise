import React from "react";
import "./home.scss"

import WelcomeSection from "./WelcomSection/WelcomeSection";
import DreamsVacation from "./dreamVacation/DreamsVacation";
import HeroImg from "./heroImg/HeroImg";
import RateIsland from "./rateIsland/RateIsland";
import Contact from "./contact/Contact";
import Opinions from "./opinions/Opinions";
import Ofert from "./ofert/Ofert";

const Home = () => {

    return (
        <>
            <main>
                <WelcomeSection/>
                <DreamsVacation/>
                <HeroImg/>
                <RateIsland/>
                <Ofert/>
                <Opinions/>
                <Contact/>
            </main>
        </>
    )

}

export default Home;