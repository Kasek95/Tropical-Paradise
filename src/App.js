import React, {useState,useEffect} from "react";
import supabase from "./supabase";
import {Route, Routes, Navigate, useParams} from "react-router-dom";
import Home from "./Component/HomePage/Home";
import IslandPage from "./Component/IslandsPage/IslandPage";
import Header from "./Component/header/Header";
import AdminPanel from "./Component/adminPanel/AdminPanel";
import User from "./Component/userPanel/User";
import Footer from "./Component/Footer/Footer";
import Apartment from "./Component/IslandsPage/apartment/Apartment";
import Login from "./Component/login/Login";
import Register from "./Component/register/Register";

function App() {
    const [rooms, setRooms] = useState();
    const [opinions, setOpinions] = useState()
    const [reservation,setReservation] = useState()
    const [apartmentLength, setApartmentLength] = useState()
    const [opinionsLength, setOpinionsLength] = useState()





    useEffect(() => {
        getRooms();
    }, []);

    useEffect(()=> {
        getOpinion()
    },[])
    useEffect(() =>{
        getReservation()
    },[])

    async function getRooms() {
        const { data } = await supabase.from("Roms").select();
        setRooms(data);
    }
    async function getOpinion() {
        const {data} = await  supabase.from("opinions").select()
        setOpinions(data)
    }

    async function getReservation() {
        const {data} = await  supabase.from("book").select()
        setReservation(data)
    }

    return (
      <>
          <Header apartments={rooms}/>
          <Routes>
              <Route path="*" element={<Navigate to= "/" />}> </Route>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/islands" element={<IslandPage getRooms={getRooms} apartments={rooms}/>}></Route>
              <Route path={`/islands/apartment/:apartmentId`} element={<Apartment getReservation={getReservation} reservation={reservation} opinions={opinions} getOpinion={getOpinion} getRooms={getRooms} apartments={rooms}/>}></Route>
              <Route path="/adminPanel" element={<AdminPanel getApartments={getRooms}  apartments={rooms} opinions={opinions} reservation={reservation} getOpinion={getOpinion}/>}></Route>
              <Route path={"/Login"} element={<Login/>}></Route>
              <Route path={"/register"} element={<Register/>}></Route>
              <Route path="/Strefa-klienta" element={<User reservation={reservation} apartments={rooms}/>}></Route>
          </Routes>
          <Footer/>

      </>
  );
}

export default App;
