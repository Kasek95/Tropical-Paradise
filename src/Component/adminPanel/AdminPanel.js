import React, {useState} from "react"
import "./adminPanel.scss"
import {FaBars} from "react-icons/fa"
import {VscChromeClose} from "react-icons/vsc"
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/user";
import {useNavigate} from "react-router-dom";
import supabase from "../../supabase";
import SingielApartment from "./sinigielApartmen/SingielApartment";


const AdminPanel = ({apartments,reservation}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.value.user)
    const logOut = async () => {
        await supabase.auth.signOut();
        dispatch(login({user:null}))
        navigate("/")
    }

    const [showAdminMenu, setShowAdminMenu] = useState(false)
    const [displayApartmentPanel, setDisplayApartmentPanel] = useState(true)

    if(!apartments) return null
    if(!user) {
        navigate("/")
    }
    return (
        <>
            <section className={"adminPanel"}>
                <section className={"panel container"}>
                     <div className={"adminNav"}>
                         <h2>Admin Panel</h2>
                         <section className={"navWrapper"}>
                           {showAdminMenu ? <VscChromeClose className={"hamburger"} onClick={()=> setShowAdminMenu(false)}/>  : <FaBars className={"hamburger"} onClick={()=> setShowAdminMenu(true)}/>}
                           <nav className={showAdminMenu ? "navigationAdmin show" : "navigationAdmin"}>
                               <span>Apartamenty</span>
                               <span>Dodaj Apartament</span>
                               <span>Komentarze</span>
                               <span>Rezerwacje</span>
                           </nav>
                            <button  onClick={logOut} className={"logout"}>Logout</button>
                         </section>
                     </div>
                    <section className={displayApartmentPanel ? "apartmentSection" : "apartmentSection hide"}>
                        <h3>Apartment</h3>
                        <article className={"apartments"}>
                            {apartments.map(apartment =>(
                              <SingielApartment apartment={apartment} />
                            ))}
                        </article>
                    </section>
                </section>

            </section>
        </>
    )

}

export default AdminPanel;