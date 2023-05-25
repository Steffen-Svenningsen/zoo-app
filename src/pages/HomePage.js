import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import IntroGuide from '../components/IntroGuide';
import QuickLinkBox from '../components/QuickLinkBox';
import ZooMap from "../assets/images/zoo-map.webp";
import OpeningHours from "../assets/images/opening-hours.webp";
import Food from "../assets/images/food.webp";
import Armadillo from "../assets/images/armadillo.webp";
import WristbandItem from "../components/WristbandItem";
import AddWristbandForm from "../components/AddWristbandForm";
import EditWristbandForm from "../components/EditWristbandForm";
import Giraf from "../assets/images/giraf.webp";
import FaqAccordion from '../components/FaqAccordion';

export default function HomePage() {
  const [introScreen, setIntroScreen] = useState(true)
  useEffect(() =>  {
    if (localStorage.getItem("hasVisited")){
      setIntroScreen(false)
    } else {
      localStorage.setItem("hasVisited", "true")
    }
  }, [])

  const [wristbands, setWristbands] = useState(() => {
    // we use getItem to get the wristbands thats saved in localStorage. but maybe there's none there?
    const savedWristbands = localStorage.getItem("wristbands");
    // if there are wristbands stored in localStorage
    if (savedWristbands) {
      // we return the parsed JSON object back to a javascript object
      return JSON.parse(savedWristbands);
      // otherwise
    } else {
      // we will return an empty array
      return [];
    }
  });
  const [wristband, setWristband] = useState("");

  function handleInputChange(e) {
    // set the new state value to the current value of the input field
    setWristband(e.target.value);
  }

  // we need a way to submit the form via a function here
  function handleFormSubmit(e) {
    // we will prevent the browsers default behavior or refreshing page when submitting
    e.preventDefault();

    // if the input field is empty, don't submit
    if (wristband !== "") {
      setWristbands([
        ...wristbands,
        {
          // give it an id to identify the object
          id: wristbands.length + 1,
          // give the value a text prop and trim the whitespace
          text: wristband.trim()
        }
      ]);
    }

    // and last but not least, set wristband to empty string to give us a new empty input field
    setWristband("");
  }

  useEffect(() => {
    // stringify the localStorage data so we get a JSON type data to work with
    localStorage.setItem("wristbands", JSON.stringify(wristbands));
  }, [wristbands]);

  // function to remove a wristband item from the wristband array
  function handleDeleteClick(id) {
    const removeItem = wristbands.filter((wristband) => {
      return wristband.id !== id;
    });
    setWristbands(removeItem);
  }

  // create a boolean to indicate whether we're in editing mode or adding mode. We render this at HomePage.js via conditional rendering
  const [isEditing, setIsEditing] = useState(false);
  const [currentWristband, setCurrentWristband] = useState({});

  // If in editing mode we need a function to save the input changes
  function handleEditInputChange(e) {
    setCurrentWristband({ ...currentWristband, text: e.target.value });
    console.log(currentWristband);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateWristband(currentWristband.id, currentWristband);
  }

  // function to edit a wristband item
  function handleUpdateWristband(id, updatedWristband) {
    const updatedItem = wristbands.map((wristband) => {
      return wristband.id === id ? updatedWristband : wristband;
    });
    setIsEditing(false);
    setWristbands(updatedItem);
  }

  function handleEditClick(wristband) {
    setIsEditing(true);
    setCurrentWristband({ ...wristband });
  }

  const accordionData = [
    {
        title: 'Er min betaling sikker?',
        content: 'Ja, din betaling er altid sikker via vores app. Når du har indtastet din armbåndskode og du indbetaler, vil pengene sikkert blive sendt til dine tilkoblede armbånd.'
    },
    {
        title: 'Hvad hvis jeg har flere armbånd?',
        content: 'Har du købt armbånd til flere gør det ingen forskel. Betalingen kommer i en pulje som tilhører alle dine armbånd. Det vil sige at du kun skal overføre et større beløb som alle armbåndene kan trække fra i stedet for et mindre beløb flere steder.'
    },
    {
        title: 'Fungerer armbåndet både til Zoo & Tivoli?',
        content: 'Nej. Dit armbånd kan bruges via standeren ved den enkelte aktivitet i Tivoli. Ved Zoo skal der betales entrépris, såfremt man ikke besidder et sæsonkort.'
    },
    {
        title: 'Mit armbånd er blevet stjålet, hvad gør jeg?',
        content: 'Er dit armbånd blevet stjålet eller på anden vis forsvundet bedes du kontakte Jyllands Park Zoo får at spærre armbåndet hurtigst muligt. Vi kan kontaktes i Information ved indgangen til parken eller via telefon på: 97 16 61 20.'
    },
    {
        title: 'Er det kun mig der kan tracke mine armbånd?',
        content: 'Ja. Når du sikkert har sat dine armbånd op kan du tracke dem via kortet i appen. Vi har implementeret en small og effektiv GPS i vores armbånd for at sikre at vi aldrig mister dem.'
    },
    {
        title: 'Vi skal hjem, men der er stadig penge på armbåndet?',
        content: 'Ønsker du at få det resterende beløb tilbage, kan du komme fordi Information og få dem udbetalt. Det er også muligt at købe armbåndet med hjem og genbruge det næste gang i kommer.'
    },
      {
        title: 'Skal man aflevere armbåndet tilbage?',
        content: 'Nej. Ved afrejse kan man tilkøbe sig armbåndet så man kan få det med hjem. Ønsker man at aflevere det tilbage sker det i Information, hvor vi nulstiller armbåndet så det kan genbruges til nye besøgende.'
    },
  ]
  return (
    <div className='page'>
      {
        introScreen ?

        // if introScreen is true, then display the intro guide else display the welcome message. Via. localStorage we can look for a first time visitor and render the correct display.

        <IntroGuide/>

        :

        <h2>Velkommen til Jyllands Park Zoo. Vi ønsker dig en god tur i parken!</h2>
        
      }
      <div className='my-wristbands'>
      {isEditing ? (
        // if editing is true, then display the edit wristband form
        <EditWristbandForm 
          currentWristband={currentWristband}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        // if editing is false, then display the add wristband form
        <AddWristbandForm 
          wristband={wristband}
          onAddInputChange={handleInputChange}
          onAddFormSubmit={handleFormSubmit}
        />
      )}

      <ul className="wristband-list">
        {wristbands.map((wristband) => (
          <WristbandItem
            wristband={wristband}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
      </div>
      <div className='news'>
        <h2>Nyheder fra parken</h2>
        <NavLink className="news-article-link" to="/ny-girafstald">
          <div>
            <img src={Giraf} width={120} height={120} alt="Giraf" />
          </div>
          <div>
            <h3>Ny girafstald</h3>
            <p>Vi er så glade og stolte over vores nye girafstald...</p>
          </div>
        </NavLink>
      </div>
      <div className="quick-links">
        <QuickLinkBox imgSrc={ZooMap} imgDesc="Kort over Jyllands Park Zoo" linkPath="/kort-oversigt" title="Kort over parken" />
        <QuickLinkBox imgSrc={Armadillo} imgDesc="Zebra" linkPath="/dyrene" title="Se alle parkens dyr" />
        <QuickLinkBox imgSrc={Food} imgDesc="Mad og drikke" linkPath="/mad-og-drikke" title="Mad og drikke info" />
        <QuickLinkBox imgSrc={OpeningHours} imgDesc="Åbningstider" linkPath="/aabningstider" title="Åbningstider & priser" />
      </div>
      <h3 className='faq-title'>Typisk stillede spørgsmål</h3>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <FaqAccordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}
