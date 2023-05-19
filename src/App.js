import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import HomePage from './pages/HomePage';
import DepositPage from './pages/DepositPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import Logo from "./assets/images/logo.png";
import NavBar from './components/NavBar';

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
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
