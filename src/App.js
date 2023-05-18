import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import HomePage from './pages/HomePage';
import IntroGuide from './components/IntroGuide';
import DepositPage from './pages/DepositPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  let [introScreen, setIntroScreen] = useState(true)
  useEffect(() =>  {
    if (localStorage.getItem("hasVisited")){
      setIntroScreen(false)
    } else {
      localStorage.setItem("hasVisited", "true")
    }
  }, [])
  return (
    <div className="App">
      <BrowserRouter basename={'/zoo-app'}>
        <Routes>
          <Route path='/' element={ introScreen ? <IntroGuide /> : <HomePage />}></Route>
          <Route path='/indbetal' element={ <DepositPage /> }></Route>
          <Route path='/booking' element={ <BookingPage /> }></Route>
          <Route path='/profile' element={ <ProfilePage /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
