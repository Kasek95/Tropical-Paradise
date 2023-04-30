import React from "react";
import "./home.scss"

import WelcomeSection from "./WelcomSection/WelcomeSection";
import DreamsVacation from "./dreamVacation/DreamsVacation";
import HeroImg from "./heroImg/HeroImg";
import RateIsland from "./rateIsland/RateIsland";

const Home = () => {

    return (
        <>
            <main>
                <WelcomeSection/>
                <DreamsVacation/>
                <HeroImg/>
                <RateIsland/>
            </main>
        </>
    )

}

export default Home;