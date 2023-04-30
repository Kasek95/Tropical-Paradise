import React from "react";
import "./userPanel.scss"
import UserMenu from "./menuPanel/UserMenu";

const  User = ({apartments}) => {

    return (
        <>

            <main className={"UserPanel"}>
                <UserMenu apartments={apartments}/>
                <section className={"container userContainer"}>


                  </section>
            </main>
        </>
    )

}

export default User;