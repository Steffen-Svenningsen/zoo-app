import React from 'react'
import BackBtn from '../components/BackBtn'
import FoodImage from "../assets/images/food.webp"

export default function FoodPage() {
  return (
    <div className='page food-page'>
      <BackBtn linkPath="/"/>
      <img src={FoodImage} alt="Mad og drikke" />
      <h3>Information vedr. mad og drikke.</h3>
      <p>
        I Jyllands Park Zoo er I velkomne til selv at medbringe mad og drikkevarer.

        <br /> <br />

        Når sulten nærmere sig og benene trænger til et lille hvil, så har vi omkring 850 siddepladser i hyggelige omgivelser, hvor du kan nyde din medbragte mad.

        <br /> <br />

        Ellers tilbyder kioskerne og cafeteriet et fint udvalg af lækker mad og drikke til både store og små. (Det er dog ikke tilladt at medbringe egne mad og drikkevarer i kioskerne og cafeteriet.)

        <br /> <br />

        Du kan forkæle dig selv med en lækker burger, sandwich, pølsehorn, pizza eller anden traditionel fastfood mm. Der er også tænkt på børnene. Vi har flere forskellige børnemenuer til de mindste f.eks. fiskefilet, frikadeller, kyllingespyd mm.

        <br /> <br />

        Derudover har vi også Coffee to go, bredt udvalg af is, slush ice og meget mere. For ikke at glemme vores grill selv menu som er et populært hit blandt vores besøgende.

        <br /> <br />

        Har i spørgsmål eller andet kan vi kontaktes på telefon: 97 16 61 88 eller i Informationen ved indgangen til parken.
      </p>
    </div>
  )
}
