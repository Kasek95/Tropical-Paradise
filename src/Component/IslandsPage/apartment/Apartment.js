import React, {useState} from "react";
import Slider from "react-slick";
import {useParams,Link} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {FaStar} from "react-icons/fa"
import {useSelector} from "react-redux"
import {settings} from "./settings";
import { DatePicker } from 'antd';
import supabase from "../../../supabase";
import "./apartment.scss"
import AddOpinionForm from "./addOpinionForm/AddOpinionForm";
import moment from "moment";




const Apartment = ({apartments,getRooms, opinions, getOpinion, reservation,getReservation}) => {
    const {apartmentId} = useParams()
    const {RangePicker} = DatePicker
    const user = useSelector((state) => state.user.value.user)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [isDisplayForm, setIsDisplayForm] = useState(false)
    const [dateRange, changeDateRange] = useState(null);
    const setCloseForm = () => {
        setIsDisplayForm(false)
    }

    const setToLike = async (id) => {
        const findApartments = apartments.find(el => el.id === id)

       await supabase
            .from("Roms")
            .update({
                RomLiked: !findApartments.RomLiked
            })
            .eq("id", id)
        getRooms()
    }
    const onDateRangeChange = dateRange => {
        if (dateRange) {
            changeDateRange(returnMomentDateRange(dateRange[0], dateRange[1]));
        } else {
            changeDateRange([]);
        }
    };

    const returnMomentDateRange = (start, finish) => {
        return [moment(start, "YYYY-MM-DD"), moment(finish, "YYYY-MM-DD")];
    };

    if(!apartments || !opinions || !reservation) return null
    const singielApartment = apartments.find(el => el.id == apartmentId)
    const opinionApartment = opinions.filter(el => el.apartmentId === singielApartment.id)
    const otherApartmentsInIsland = apartments.filter(el => el.id !== singielApartment.id && el.Island === singielApartment.Island)
    const reservationToSingielApartment = reservation.filter(el => el.apartmentId === singielApartment.id)

    const bookApartment = async(e) => {
        e.preventDefault()
        await supabase.from("book").insert({
            StartDate: startDate,
            EndDate: endDate,
            apartmentId: singielApartment.id,
            userId: user.id,
            userEmail: user.email

        })
        getReservation()
        getRooms()
        getOpinion()
        changeDateRange(null)
    }

    const handleDateChange = (date,dateString) => {
        setStartDate(dateString[0])
        setEndDate(dateString[1])
        onDateRangeChange(dateString)
    }

    const disabledPastDate = (current) => {
         const now = new Date(current).setHours(0,0,0,0)
         const reservations = reservationToSingielApartment.map(x => ({ start: new Date(x.StartDate).setHours(0,0,0,0), end : new Date(x.EndDate ).setHours(0,0,0,0)}))
        return current && current < moment().endOf("day") || reservations.some(x => now >= (x.start) && now <= x.end)
    }

    return (
        <>
            <section className={"apartment"}>
                 <section className={"container apartmentContainer"}>
                     {singielApartment.RomLiked === true ? <AiFillHeart onClick={() => setToLike(singielApartment.id)} className={"heart red"}/> : <AiOutlineHeart onClick={() => setToLike(singielApartment.id)} className={"heart"}/>}
                     <Link className={"backLink"} to={"/islands"}>Wróć do wyszukiwania</Link>
                     <h2>Wyspa {singielApartment.Island}, Apartment nr {singielApartment.id}</h2>
                     <section className={"mainCard"}>
                         <div className={"img"}>
                             <img src={singielApartment.RomImg} alt={singielApartment.RomInfo}/>
                         </div>
                         <section className={"reservation"}>
                             <h4>Zarezerwuj</h4>
                             <RangePicker onChange={handleDateChange}
                                          disabledDate={(current) => disabledPastDate(current)}
                                          value={dateRange !== "" ? dateRange : ""}
                             >
                             </RangePicker>
                             <span className={"infoRom"}>Cena za noc: {singielApartment.RomPrice} Zł</span>
                             <span className={"infoRom"}>Ilość gwiazdek: <FaStar/>{singielApartment.rating}</span>
                             <button onClick={bookApartment} disabled={user !== null ? "" :"disabled"} type={"submit"}>Zamów Nocleg</button>
                         </section>
                     </section>
                     <h3>Opis Apartamentu:</h3>
                     <span className={"info"}>{singielApartment.RomInfo}</span>


                         {opinionApartment.length === 0 ? null :
                             <section className={"apartmentOpinion"}>
                                  <ul className={"listOfOpinion"}>
                                      {opinionApartment.map(el => (
                                          <li key={el.id} className={"opinionContainer"}>
                                              <p className={"rating"}> <FaStar className={"star"}/>{el.rating}</p>
                                              <h5>{el.name}</h5>
                                              <span className={"userOpinion"}>{el.opinia}</span>
                                          </li>
                                      ))}
                                  </ul>
                             </section>
                         }
                         <section className={isDisplayForm ? "addOpinionFormContainer show" : "addOpinionFormContainer"}>
                             <AddOpinionForm getOpinion={getOpinion} apartmentId={singielApartment.id} setIsDisplayForm={setCloseForm}/>
                         </section>
                        <button onClick={()=> setIsDisplayForm(true)} className={"addOpinion"}>Dodaj opinię</button>
                         <section className={"otherApartments"}>
                            <Slider {...settings}>
                                {otherApartmentsInIsland.map(el => (
                                    <div key={el.id} className={"romContainer"}>
                                        {el.RomLiked === true ? <AiFillHeart onClick={() => setToLike(el.id)} className={"heart red"}/> : <AiOutlineHeart onClick={() => setToLike(el.id)} className={"heart"}/> }
                                        <div className={"imgContainer"}>
                                            <img src={el.RomImg} alt={`Apartment in Island ${el.Island} `}/>
                                        </div>
                                        <div className={"overview"}>
                                            <span>Wyspa {el.Island}</span>
                                            <span><FaStar className={"star"}/>{el.rating}</span>
                                        </div>
                                        <div className={"book"}>
                                            <span>Cena za noc: {el.RomPrice}</span>
                                            <Link to={`/islands/apartment/${el.id}`}>Sprawdź</Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                     </section>
                 </section>
            </section>
        </>
    )

}

export default Apartment;