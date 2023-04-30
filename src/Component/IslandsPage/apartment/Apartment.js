import React from "react";
import Slider from "react-slick";
import {useParams,Link} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {FaStar} from "react-icons/fa"
import {IoIosQuote} from "react-icons/io"
import {BsPersonCircle} from "react-icons/bs"
import {settings,settings2} from "./settings";
import { DatePicker } from 'antd';
import supabase from "../../../supabase";
import "./apartment.scss"


const Apartment = ({apartments,getRooms, opinions, getOpinion}) => {
    const {apartmentId} = useParams()
    const {RangePicker} = DatePicker



    const setToLike = async (id) => {
        const findApartments = apartments.find(el => el.id === id)

        const {data, error}= await supabase
            .from("Roms")
            .update({
                RomLiked: !findApartments.RomLiked
            })
            .eq("id", id)
        getRooms()
    }

    if(!apartments) return null
    if(!opinions) return null
    const singielApartment = apartments.find(el => el.id == apartmentId)
    const opinionApartment = opinions.filter(el => el.apartmentId === singielApartment.id)
    const otherApartmentsInIsland = apartments.filter(el => el.id !== singielApartment.id && el.Island === singielApartment.Island)


    return (
        <>
            <section className={"apartment"}>
                 <section className={"container apartmentContainer"}>
                     {singielApartment.RomLiked === true ? <AiFillHeart onClick={() => setToLike(singielApartment.id)} className={"heart red"}/> : <AiOutlineHeart onClick={() => setToLike(singielApartment.id)} className={"heart"}/>}
                     <Link className={"backLink"} to={"/islands"}>Back To All Apartments</Link>
                     <h2>Wyspa {singielApartment.Island}, Apartment nr {singielApartment.id}</h2>
                     <section className={"mainCard"}>
                         <div className={"img"}>
                             <img src={singielApartment.RomImg} alt={singielApartment.RomInfo}/>
                         </div>
                         <section className={"reservation"}>
                             <h4>Zarezerwuj</h4>
                             <RangePicker onChange={""}
                                          disabledDate={(current) => {
                                              const now = new Date(current).setHours(0,0,0,0)
                                              //const reservations = activeReservations.map(x => ({ start: new Date(x.startDate).setHours(0,0,0,0), end : new Date(x.endDate ).setHours(0,0,0,0)}))
                                              // return reservations.some(x => now >= x.start && now <= x.end);
                                          }}>
                             </RangePicker>
                             <span className={"infoRom"}>Cena za noc: {singielApartment.RomPrice} Zł</span>
                             <span className={"infoRom"}>Ilość gwiazdek: <FaStar/>{singielApartment.rating}</span>
                             <button>Zamów Nocleg</button>
                         </section>
                     </section>
                     <h3>Opis Apartamentu:</h3>
                     <span>{singielApartment.RomInfo}</span>

                     <section className={"opinion"}>

                         {opinionApartment.length === 0 ? null :
                             <section className={"apartmentOpinion"}>
                                 <Slider {...settings2}>
                                     {opinionApartment.map(el => (
                                         <div key={el.id} className={"opinionCard"}>
                                             <BsPersonCircle className={"avatar"}/>
                                             <IoIosQuote className={"quot"}/>
                                             <span className={"opinion"}>{el.opinia}</span>
                                             <div className={"infoContainer"}>
                                                 <span>{el.name}</span>
                                                 <span>Ocena:{el.rating} <FaStar className={"star"}/></span>
                                             </div>
                                         </div>
                                     ))}
                                 </Slider>
                             </section>
                         }

                     </section>


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
                                            <Link to={`/islands/apartment/${el.id}`}>Check</Link>
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