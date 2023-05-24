import React from 'react'
import GirafHouse from "../assets/images/girafhouse.webp"
import Logo from "../assets/images/logo192.png"
import BackBtn from '../components/BackBtn'

export default function NewsArticle() {
  return (
    <div className='page news-giraf'>
      <BackBtn linkPath="/"/>
      <img src={GirafHouse} alt="Giraf stald" />
      <h3>Ny girafstald til vores kommende giraffer.</h3>
      <span className='by-line'><img src={Logo} alt="Jyllands Park Zoo Logo" />  Jyllands Park Zoo</span>
      <h4>Vi trængte sådan til en ny girafstald.</h4>
      <p>
          Jyllands park zoo har siden 2014 været med i det europæiske avlssamarbejde omkring giraffer, og har haft plads til at holde to hangiraffer.

          Med tiden begyndte vores to giraffer dog at skrante og halte. Det viste sig at den ene havde sprunget akillessenen, hvilket ikke kunne repareres og den anden var slidt op i både hofte og led. Til stor ærgelse var der ingen anden udvej end aflivning af begge.

          Uden giraffer et stykke tid, besluttede vi os derfor at bygge en ny stald til de nye kommende giraffer!
      </p>
      <h4>Færdig og godkendt af fødevarestyrelsen.</h4>
      <p>
          Stalden er blevet færdig i år, og er nu klar til giraffer. Det   europæiske avlsprogram har en koordinator som styrer det samlede avlsprogram for giraffer. Han fordeler giraffer til alle medlemmerne af avlsprogrammet, så bestanden holder sig sund og bæredygtig.
          Han er ved at finde nogle giraffer, som passer godt ind i en helt ny flok i Jyllands Park Zoo.
      </p>
      <h4>En giraf er ikke bare en giraf.</h4>
      <p>
          For at holde en sund bestand af giraffer i de zoologiske haver, er avlskoordinatoren nødt til at styre hvilke giraffer der passer bedst i hvilke haver. Det hele skal gå op så man får nogle giraffer som er af den rigtige art, den rigtige alder og den rigtige genetik.
          Denne proces tager lidt tid, så vi kan ikke med sikkerhed sige, hvornår de kommer til Jyllands Park Zoo – men de kommer.
      </p>
    </div>
  )
}
