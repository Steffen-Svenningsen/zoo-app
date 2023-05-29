import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCygSUv-4pOkvsl8yG3o7rXqe7DyJJh-Sw",
  authDomain: "jyllands-park-zoo.firebaseapp.com",
  projectId: "jyllands-park-zoo",
  storageBucket: "jyllands-park-zoo.appspot.com",
  messagingSenderId: "756081357540",
  appId: "1:756081357540:web:bb71f007a11b8f2a76b2f1",
  databaseURL: "https://jyllands-park-zoo-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

export default function BookingPage() {
  let grillArea = {
    name: "Grillplads syd",
    desc: "Ved booking af grillplads er i sikret spisepladser og en grill til fri afbenyttelse hele dagen.",
    image: "https://jyllandsparkzoo.dk/sites/default/files/siddeplads-grill-small.jpg"
  }

  const bookGrill = (event) => {
    console.log(event)
    function writeUserData() {
      const db = getDatabase();
      set(ref(db, 'booking/'), {
        GrillImage: grillArea.image,
        GrillName: grillArea.name,
        GrillDescription: grillArea.desc,
      });
    }
    const bookMsg = document.querySelector(".booking-msg");
    bookMsg.style.display = "block";
    writeUserData()
  }
  return (
    <div className='page'>
      <h2>Book aktiviteter</h2>
      <div className="grill-card">
        <img src={grillArea.image} alt="Jyllands Park Zoo grillplads" />
        <div className="content">
          <h3>{grillArea.name}</h3>
          <p>{grillArea.desc}</p>
          <button type='submit' onClick={bookGrill}>Book</button>
          <p className='booking-msg'>Du har nu booket en plads ved grillen. Bliver i forhindret bedes i kontakte Informationen på tlf: 97 16 61 20.</p>
          <p className='grill-note'>OBS! Vi oplever for tiden at folk booker uden at benytte sig af grillpladsen. Dette opfordrer vi til at der ophører da vi spilder ressourcer og fratager pladsen fra andre ved dette.</p>
        </div>
      </div>
    </div>
  )
}
