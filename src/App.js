import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import HomePage from './pages/HomePage';
import DepositPage from './pages/DepositPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import Logo from "./assets/images/logo.png";
import NavBar from './components/NavBar';
import MapOverview from './pages/MapOverview';
import FoodPage from './pages/FoodPage';
import OpeningHours from './pages/OpeningHours';
import AnimalList from './pages/AnimalList';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/zoo-app'}>
        <img className='header-logo' src={Logo} alt="Jyllands Park Zoo Logo" />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/indbetal' element={ <DepositPage /> }></Route>
          <Route path='/booking' element={ <BookingPage /> }></Route>
          <Route path='/profil' element={ <ProfilePage /> }></Route>
          <Route path='/kort-oversigt' element={ <MapOverview /> }></Route>
          <Route path='/mad-og-drikke' element={ <FoodPage /> }></Route>
          <Route path='/aabningstider' element={ <OpeningHours /> }></Route>
          <Route path='/dyrene' element={ <AnimalList /> }></Route>
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
