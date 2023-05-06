import React, {useState} from "react";
import "./userPanel.scss"
import UserMenu from "./menuPanel/UserMenu";
import {useSelector} from "react-redux";

const  User = ({apartments,reservation}) => {
    const user = useSelector((state) => state.user.value.user)
    const [showReservation, setShowReservation] = useState(false)

    const setReservation = () => {
        setShowReservation(true)
    }
   if(!reservation) return null

    return (
        <>

            <main className={"UserPanel"}>

                <section className={"userContainer"}>
                    <UserMenu setReservation={setReservation} user={user} apartments={apartments}/>

                    <section className={showReservation ? "userAction container show" : "userAction container"}>
                        {user === null ? null : reservation.filter(el => el.userId === user.id)
                            .map(el => (
                                <div className={"reservationList"} key={el.id}>{el.StartDate}</div>
                            ))}
                    </section>


                </section>
            </main>
        </>
    )

}

export default User;