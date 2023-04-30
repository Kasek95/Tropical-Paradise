import React from "react";
import IslandMain from "./islandMain/IslandMain";


const IslandPage = ({apartments,getRooms}) => {

    return (
        <>
            <IslandMain getRooms={getRooms} apartments={apartments}/>
        </>
    )
}

export default IslandPage;