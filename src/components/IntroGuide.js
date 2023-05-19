import React, { useRef, useState } from "react";
import { NavLink } from 'react-router-dom'
import AppImage from "../assets/illustrations/app.png";
import WalletImage from "../assets/illustrations/wallet.png";
import ZooImage from "../assets/illustrations/zoo.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.sass";

// import required modules
import { Pagination } from "swiper";

export default function IntroGuide() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="img-container">
            <img src={AppImage} alt="App" />
          </div>
          <p>Tast koden fra armbåndet ind i appen og se magien udfolde sig!</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <img src={WalletImage} alt="Indbetal" />
          </div>
          <p>Indbetal penge på armbåndet og prøv frit parkens skønne aktiviteter!</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <img src={ZooImage} alt="Zoo park" />
          </div>
          <p>Sæt armbåndet tæt på standeren ved den enkelte aktivitet og få adgang!</p>
          <NavLink className="cta-btn" to="/indbetal">Kom igang</NavLink>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
