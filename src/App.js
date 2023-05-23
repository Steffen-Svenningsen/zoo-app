import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import HomePage from './pages/HomePage';
import TicketPage from './pages/TicketPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import Logo from "./assets/images/logo.png";
import NavBar from './components/NavBar';
import MapOverview from './pages/MapOverview';
import FoodPage from './pages/FoodPage';
import OpeningHours from './pages/OpeningHours';
import AnimalList from './pages/AnimalList';
import NewsArticle from './pages/NewsArticle';
import DepositPage from './pages/DepositPage';
import ScrollToTop from './helpers/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/zoo-app'}>
        <ScrollToTop />
        <img className='header-logo' src={Logo} alt="Jyllands Park Zoo Logo" />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/billetter' element={ <TicketPage /> }></Route>
          <Route path='/booking' element={ <BookingPage /> }></Route>
          <Route path='/profil' element={ <ProfilePage /> }></Route>
          <Route path='/kort-oversigt' element={ <MapOverview /> }></Route>
          <Route path='/mad-og-drikke' element={ <FoodPage /> }></Route>
          <Route path='/aabningstider' element={ <OpeningHours /> }></Route>
          <Route path='/dyrene' element={ <AnimalList /> }></Route>
          <Route path='/ny-girafstald' element={ <NewsArticle /> }></Route>
          <Route path='/indbetal' element={ <DepositPage /> }></Route>
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
