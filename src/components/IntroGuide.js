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
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    setIsActive(current => !current);
  }
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
    {visible && (

      <Swiper pagination={true} modules={[Pagination]} className={ isActive ? "mySwiper hidden" : "mySwiper"}>
        <button onClick={removeElement && handleClick} className="close-guide">X</button>
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
          <button onClick={removeElement && handleClick} className="cta-btn">Kom igang</button>
        </SwiperSlide>
      </Swiper>
    )}
    </>
  );
}
