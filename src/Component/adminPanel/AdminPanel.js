import React, {useState} from "react"
import "./adminPanel.scss"
import {FaBars} from "react-icons/fa"
import {VscChromeClose} from "react-icons/vsc"
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/user";
import {useNavigate} from "react-router-dom";
import supabase from "../../supabase";
import SingielApartment from "./sinigielApartmen/SingielApartment";
import Opinion from "./opinion/Opinion";
import AddApartmentForm from "./formAddApartment/AddApartmentForm";
import Reservation from "./reservation/Reservation";
import ReactPaginate from "react-paginate";


const AdminPanel = ({apartments,reservation,opinions,getOpinion,opinionsLength,apartmentLength,getApartments, getReservation}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.value.user)
    const [showAdminMenu, setShowAdminMenu] = useState(false)
    const [displayApartmentPanel, setDisplayApartmentPanel] = useState(true)
    const [displayOpinionPanel, setDisplayOpinionPanel] = useState(false)
    const [addApartment, setAddApartment] = useState(false)
    const [isDisplayReservation, setIsDisplayReservation] = useState(false)
    const [pageNumber, setPageNumber] = useState(0);
    const [apartmentPage, setApartmentPage] = useState(0)
    const [reservationPage,setReservationPage] = useState(0)
    const reservationPerPage = 3;
    const opinionsPerPage = 8;
    const apartmentsPerPage = 8;
    const pageVisited = pageNumber * opinionsPerPage;
    const apartmentVisited = apartmentPage * apartmentsPerPage;
    const reservationVisited = reservationPage * reservationPerPage

    const logOut = async () => {
        await supabase.auth.signOut();
        dispatch(login({user:null}))
        navigate("/")
    }

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    const changeApartmentPage = ({selected}) => {
        setApartmentPage(selected)
    }
    const changeReservationPage = ({selected}) => {
        setReservationPage(selected)
    }
    const setAddApartmentDisplay = () => {
        setAddApartment(false)
        setDisplayApartmentPanel(true)
    }


    const setOpinionPanel = () => {
        setDisplayOpinionPanel(true);
        setDisplayApartmentPanel(false);
        setShowAdminMenu(false)
        setAddApartment(false)
        setIsDisplayReservation(false)
    }
    const setApartmentPanel = () => {
        setDisplayApartmentPanel(true)
        setDisplayOpinionPanel(false)
        setShowAdminMenu(false)
        setAddApartment(false)
        setIsDisplayReservation(false)
    }
    const setAddApartmentShow = () => {
        setAddApartment(true)
        setDisplayApartmentPanel(false)
        setDisplayOpinionPanel(false)
        setShowAdminMenu(false)
        setIsDisplayReservation(false)
    }
    const setReservationDisplay = () => {
        setIsDisplayReservation(true)
        setAddApartment(false)
        setDisplayApartmentPanel(false)
        setDisplayOpinionPanel(false)
        setShowAdminMenu(false)
    }

    if(!apartments && !opinions && !opinionsLength && !apartmentLength) return null
    if(!user) {
        navigate("/")
    }
    const pageCount = Math.ceil(opinions === undefined ? 1 : opinions.length/ opinionsPerPage);
    const apartmentCount = Math.ceil(apartments === undefined ?  1 : apartments.length / apartmentsPerPage);
    const reservationCount = Math.ceil(reservation === undefined ? 1 : reservation.length / reservationPerPage)
    const displayOpinions = opinions === undefined ? null : opinions.slice(pageVisited, pageVisited + opinionsPerPage)
        .map((opinion) => (
            <Opinion key={opinion.id} getOpinion={getOpinion} opinion={opinion}/>
        ))
    const displayApartments = apartments === undefined ? null : apartments.slice(apartmentVisited, apartmentVisited + apartmentsPerPage)
        .map(apartment => (
            <SingielApartment getApartments={getApartments} key={apartment.id} apartment={apartment} />
        ))
    const displayReservation = reservation === undefined ? null : reservation.slice(reservationVisited, reservationVisited + reservationPerPage)
        .map(el=> (
            <Reservation key={el.id} getReservation={getReservation} el={el}/>
        ))


    return (
        <>
            <section className={"adminPanel"}>
                <section className={"panel container"}>
                     <div className={"adminNav"}>
                         <h2>Admin Panel</h2>
                         <section className={"navWrapper"}>
                           {showAdminMenu ? <VscChromeClose className={"hamburger"} onClick={()=> setShowAdminMenu(false)}/>  : <FaBars className={"hamburger"} onClick={()=> setShowAdminMenu(true)}/>}
                           <nav className={showAdminMenu ? "navigationAdmin show" : "navigationAdmin"}>
                               <span onClick={setApartmentPanel}>Apartamenty</span>
                               <span onClick={setAddApartmentShow}>Dodaj Apartament</span>
                               <span onClick={setOpinionPanel}>Opinie</span>
                               <span onClick={setReservationDisplay}>Rezerwacje</span>
                           </nav>
                            <button  onClick={logOut} className={"logout"}>Logout</button>
                         </section>
                     </div>
                    <section className={displayApartmentPanel ? "apartmentSection" : "apartmentSection hide"}>
                        <h3>Apartment</h3>
                        <article className={"apartments"}>
                            {displayApartments}
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={apartmentCount}
                                onPageChange={changeApartmentPage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />
                        </article>
                    </section>
                    <section className={displayOpinionPanel ? "opinions" : "opinions hide"}>
                        <h3>Opinie</h3>
                        <article className={"opinion"}>
                            {displayOpinions}
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />
                        </article>
                    </section>
                    <section className={addApartment ? "addApartment" : "addApartment hide"}>
                        <article className={"addApartmentContainer"}>
                            <AddApartmentForm cancelForm={setAddApartmentDisplay} getApartments={getApartments}/>
                        </article>
                    </section>

                    <section className={isDisplayReservation ? "reservationMenu " : "reservationMenu hide"}>
                        <h3>Rezerwacje</h3>
                         <article className={"singielReservation"}>
                             {displayReservation}
                             <ReactPaginate
                                 previousLabel={"Previous"}
                                 nextLabel={"Next"}
                                 pageCount={reservationCount}
                                 onPageChange={changeReservationPage}
                                 containerClassName={"paginationBttns"}
                                 previousLinkClassName={"previousBttn"}
                                 nextLinkClassName={"nextBttn"}
                                 disabledClassName={"paginationDisabled"}
                                 activeClassName={"paginationActive"}
                             />

                         </article>
                    </section>
                </section>

            </section>
        </>
    )

}

export default AdminPanel;