import React, {useState, useEffect} from "react";
import "./islandMain.scss"
import AllOffers from "../allOffers/AllOffers";
import IslandTikiTaki from "../IslandTikiTaki/IslandTikiTaki";
import {useSearchParams} from "react-router-dom"
import supabase from "../../../supabase";

const IslandMain = ({apartments,getRooms}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    (searchParams.get('Island'));
    const [TikiTaki, setTikiTaki] = useState(false)
    const [TocaToca, setTocaToca] = useState(false)
    const [nobu, setNobu] = useState(false)
    const [allIsland, setAllIsland] = useState(true)


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
    const all = () => {
        setTikiTaki(false)
        setAllIsland(true)
        setTocaToca(false)
        setNobu(false)
        searchParams.delete("Island")
    }

    const IslandTikiTakiShow = () => {
        setTikiTaki(true)
        setAllIsland(false)
        setTocaToca(false)
        setNobu(false)
        setSearchParams({Island: 'Tiki-Taki'});
    }
    const IslandTocaTocaShow = () => {
        setTikiTaki(false)
        setAllIsland(false)
        setTocaToca(true)
        setNobu(false)
        setSearchParams({Island: 'Toca-Toca'});
    }
    const  IslandNobuShow = () => {
        setTikiTaki(false)
        setAllIsland(false)
        setTocaToca(false)
        setNobu(true)
        setSearchParams({Island: 'Nobu'});
    }
    useEffect(() => {
        switch (searchParams.get('Island')) {
            case 'Tiki-Taki':
                IslandTikiTakiShow()
                break;
            case 'Toca-Toca':
                IslandTocaTocaShow()
                break;
            case 'Nobu':
                 IslandNobuShow()
                break;
            default:
               all()
        }
    }, [searchParams]);



    return (
        <>
            <main className={"islandMain"}>
                   <section className={"container islandContainer"}>
                       <div className={"islandMenu"}>
                           <h3 onClick={all}>Islands</h3>
                           <span className={TikiTaki ? "IslandTitle style" : "IslandTitle"}  onClick={IslandTikiTakiShow}>Wyspa Tiki Taki
                            <div className={TikiTaki ? "outline show" : "outline"}></div>
                           </span>
                           <span onClick={IslandTocaTocaShow} className={TocaToca ? "IslandTitle style" : "IslandTitle"} >Wyspa Toca Toca
                                <div className={TocaToca ? "outline show" : "outline"}></div>
                           </span>
                           <span onClick={IslandNobuShow} className={nobu ? "IslandTitle style" : "IslandTitle"}>Wyspa Nobu
                                <div className={nobu ? "outline show" : "outline"}></div>
                           </span>
                       </div>

                       <section className={"roms"}>
                           <article className={allIsland ? "allRoms" : "allRoms hide"}>
                               <AllOffers getRooms={getRooms} apartments={apartments} setToLike={setToLike}/>
                           </article>

                           <article className={TikiTaki ? "IslandTikiTaki show" : "IslandTikiTaki"}>
                               <IslandTikiTaki getRooms={getRooms} apartments={apartments} setToLike={setToLike}/>
                           </article>
                       </section>


                   </section>
            </main>
        </>
    )

}
export default IslandMain;