import React from "react"
import UslugeCard from "./UslugeCard"
import { CardType } from "./UslugeCard"

type ImageObject = {
  usluga: string
  imgSrc: string
  imgAlt: string
  cardType: CardType
}

const Images: ImageObject[] = [
  {
    usluga: "Doznaka i otprema drvnih sortimenata",
    imgSrc: "/usluge/forest_truck_full_of_logs.png",
    imgAlt: "Kamion odvozi trupce",
    cardType: "small",
  },
  {
    usluga: "EU Fondovi",
    imgSrc: "/usluge/handshake.png",
    imgAlt: "muškarci se rukuju",
    cardType: "big",
  },
  {
    usluga: "Procjena vrijednosti šume i šumskog zemljišta",
    imgSrc: "/usluge/map.png",
    imgAlt: "Osoba pokazuje penkalom na karti",
    cardType: "big",
  },
  {
    usluga: "Izrada lovno gospodarskih planova",
    imgSrc: "/usluge/hogs.png",
    imgAlt: "divlje svinje u šumi",
    cardType: "small",
  },
  {
    usluga: "Izrada šumsko gospodarskih planova",
    imgSrc: "/usluge/beech.png",
    imgAlt: "bukva",
    cardType: "small",
  },
  {
    usluga: "Otkup drvnih sortimenata",
    imgSrc: "/usluge/timber_assortments.png",
    imgAlt: "naslagana narezana drva",
    cardType: "big",
  },
]

const Usluge = () => {
  return (
    <section className="relative flex w-screen flex-col px-4 pb-16 sm:px-16 md:px-32 lg:mt-[34rem] lg:min-w-[1023px] lg:max-w-[80vw] 2xl:max-w-[1535px]">
      <div className="mt-10 flex items-center">
        <h2 className="mr-auto text-3xl font-extrabold text-green-dark lg:before:absolute lg:before:left-0 lg:before:top-[3.3rem] lg:before:inline-block lg:before:h-[10px] lg:before:w-[100px] lg:before:bg-green-dark lg:after:absolute lg:after:right-0 lg:after:top-[3.3rem] lg:after:inline-block lg:after:h-[10px] lg:after:w-[45px] lg:after:bg-green-dark">
          USLUGE
        </h2>
        <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-green-dark lg:hidden"></div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <div className="grid w-full max-w-[26rem] grid-cols-1 grid-rows-6 gap-5 sm:max-w-[80%] lg:grid-cols-3 lg:grid-rows-3">
          {Images.map((image, index) => (
            <UslugeCard
              key={index}
              nazivUsluge={image.usluga}
              imgSrc={image.imgSrc}
              imgAlt={image.imgAlt}
              cardType={image.cardType}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Usluge
