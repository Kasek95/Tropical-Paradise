import React, { useState, useEffect } from 'react';
import supabase from './supabase';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Component/HomePage/Home';
import IslandPage from './Component/IslandsPage/IslandPage';
import Header from './Component/header/Header';
import AdminPanel from './Component/adminPanel/AdminPanel';
import User from './Component/userPanel/User';
import Footer from './Component/footer/Footer';
import Apartment from './Component/IslandsPage/apartment/Apartment';
import Login from './Component/login/Login';
import Register from './Component/register/Register';
import Terms from './Component/register/terms/Terms';

function App() {
	const [rooms, setRooms] = useState();
	const [opinions, setOpinions] = useState();
	const [reservation, setReservation] = useState();
	const [payments, setPayments] = useState();

	useEffect(() => {
		getRooms();
	}, []);

	useEffect(() => {
		getOpinion();
	}, []);
	useEffect(() => {
		getReservation();
	}, []);
	useEffect(() => {
		getPayments();
	}, []);

	async function getRooms() {
		const { data } = await supabase.from('Roms').select();
		setRooms(data);
	}
	async function getOpinion() {
		const { data } = await supabase.from('opinions').select();
		setOpinions(data);
	}

	async function getReservation() {
		const { data } = await supabase.from('book').select();
		setReservation(data);
	}

	async function getPayments() {
		const { data } = await supabase.from('payments').select();
		setPayments(data);
	}

	return (
		<>
			<Header apartments={rooms} />
			<Routes>
				<Route path='*' element={<Navigate to='/' />}>
					{' '}
				</Route>
				<Route path='/' element={<Home />}></Route>
				<Route
					path='/islands'
					element={<IslandPage getRooms={getRooms} apartments={rooms} />}
				></Route>
				<Route
					path={`/islands/apartment/:apartmentId`}
					element={
						<Apartment
							getReservation={getReservation}
							reservation={reservation}
							opinions={opinions}
							getOpinion={getOpinion}
							getRooms={getRooms}
							apartments={rooms}
						/>
					}
				></Route>
				<Route
					path='/adminPanel'
					element={
						<AdminPanel
							getApartments={getRooms}
							getReservation={getReservation}
							apartments={rooms}
							opinions={opinions}
							reservation={reservation}
							getOpinion={getOpinion}
						/>
					}
				></Route>
				<Route path={'/Login'} element={<Login />}></Route>
				<Route path={'/register'} element={<Register />}></Route>
				<Route path={'/terms'} element={<Terms />}></Route>
				<Route
					path='/Strefa-klienta'
					element={
						<User
							getPayments={getPayments}
							payments={payments}
							getRooms={getRooms}
							reservation={reservation}
							apartments={rooms}
							getReservation={getReservation}
						/>
					}
				></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
