import React from 'react'
import AnimalBox from '../components/AnimalBox'
import Monkey from "../assets/images/animal-mini-images/monkey.webp"
import Alligator from "../assets/images/animal-mini-images/alligator.webp"
import Armadillo from "../assets/images/animal-mini-images/armadillo-mini.webp"
import Bavian from "../assets/images/animal-mini-images/bavian.webp"
import Beaver from "../assets/images/animal-mini-images/beaver.webp"
import Giraf from "../assets/images/animal-mini-images/giraf-mini.webp"
import Goat from "../assets/images/animal-mini-images/goat.webp"
import HouseMonkey from "../assets/images/animal-mini-images/house-monkey.webp"
import Hyena from "../assets/images/animal-mini-images/hyena.webp"
import Jaco from "../assets/images/animal-mini-images/jaco.webp"
import Kangaru from "../assets/images/animal-mini-images/kangaru.webp"
import Karakel from "../assets/images/animal-mini-images/karakel.webp"
import Lama from "../assets/images/animal-mini-images/lama.webp"
import Lion from "../assets/images/animal-mini-images/lion.webp"
import Lizard from "../assets/images/animal-mini-images/lizard.webp"
import Mangust from "../assets/images/animal-mini-images/mangust.webp"
import Ostrich from "../assets/images/animal-mini-images/ostrich.webp"
import Otter from "../assets/images/animal-mini-images/otter.webp"
import Owl from "../assets/images/animal-mini-images/owl.webp"
import Parrot from "../assets/images/animal-mini-images/parrot.webp"
import Pelican from "../assets/images/animal-mini-images/pelican.webp"
import Penguin from "../assets/images/animal-mini-images/penguin.webp"
import PrairieDog from "../assets/images/animal-mini-images/prairie-dog.webp"
import Reindeer from "../assets/images/animal-mini-images/reindeer.webp"
import SeaBear from "../assets/images/animal-mini-images/sea-bear.webp"
import Serval from "../assets/images/animal-mini-images/serval.webp"
import Snake from "../assets/images/animal-mini-images/snake.webp"
import Stork from "../assets/images/animal-mini-images/stork.webp"
import Surikat from "../assets/images/animal-mini-images/surikat.webp"
import Tapir from "../assets/images/animal-mini-images/tapir.webp"
import Turtle from "../assets/images/animal-mini-images/turtle.webp"
import WatussiBull from "../assets/images/animal-mini-images/watussi-bull.webp"
import BackBtn from '../components/BackBtn'

export default function AnimalList() {
  return (
    <div className='page'>
      <BackBtn linkPath="/"/>
      <div className="animal-list">
        <AnimalBox imgSrc={Monkey} animal="Aber" imgDesc="Aber" />
        <AnimalBox imgSrc={Armadillo} animal="Bæltedyr" />
        <AnimalBox imgSrc={Goat} animal="Dværgged" />
        <AnimalBox imgSrc={Alligator} animal="Dværgkaiman" />
        <AnimalBox imgSrc={Giraf} animal="Giraffer" />
        <AnimalBox imgSrc={Jaco} animal="Grå Jaco" />
        <AnimalBox imgSrc={Penguin} animal="Pingviner" />
        <AnimalBox imgSrc={HouseMonkey} animal="Husaraber" />
        <AnimalBox imgSrc={Stork} animal="Hvid stork" />
        <AnimalBox imgSrc={Bavian} animal="Kappebavianer" />
        <AnimalBox imgSrc={Karakel} animal="Karakel" />
        <AnimalBox imgSrc={Kangaru} animal="Kænguru" />
        <AnimalBox imgSrc={Lama} animal="Lama" />
        <AnimalBox imgSrc={Lion} animal="Løver" />
        <AnimalBox imgSrc={Otter} animal="Oddere" />
        <AnimalBox imgSrc={Parrot} animal="Papegøjer" />
        <AnimalBox imgSrc={Pelican} animal="Pelikan" />
        <AnimalBox imgSrc={Hyena} animal="Plettet hyæne" />
        <AnimalBox imgSrc={PrairieDog} animal="Præriehund" />
        <AnimalBox imgSrc={Owl} animal="Prærieugle" />
        <AnimalBox imgSrc={Reindeer} animal="Rensdyr" />
        <AnimalBox imgSrc={Serval} animal="Serval" />
        <AnimalBox imgSrc={Turtle} animal="Skildpadder" />
        <AnimalBox imgSrc={Lizard} animal="Skægagame" />
        <AnimalBox imgSrc={Ostrich} animal="Strudsefugle" />
        <AnimalBox imgSrc={Beaver} animal="Sumpbæver" />
        <AnimalBox imgSrc={Surikat} animal="Surikater" />
        <AnimalBox imgSrc={SeaBear} animal="Søbjørne" />
        <AnimalBox imgSrc={Tapir} animal="Tapir" />
        <AnimalBox imgSrc={Snake} animal="Tigerpyton" />
        <AnimalBox imgSrc={WatussiBull} animal="Watussi okser" />
        <AnimalBox imgSrc={Mangust} animal="Manguster" />
      </div>
    </div>
  )
}
