import React from "react";
import "./userPanel.scss"
import UserMenu from "./menuPanel/UserMenu";
import {useSelector} from "react-redux";

const  User = ({apartments}) => {
    const user = useSelector((state) => state.user.value.user)
    return (
        <>

            <main className={"UserPanel"}>

                <section className={"userContainer"}>
                    <UserMenu user={user} apartments={apartments}/>


                </section>
            </main>
        </>
    )

}

export default User;