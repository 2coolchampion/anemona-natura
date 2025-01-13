import React from "react"
import UslugeCard from "./UslugeCard"
import { CardType } from "./UslugeCard"
import { Usluge_bg } from "@/components/blobs"

type ImageObject = {
  usluga: string
  imgSrc: string
  imgAlt: string
  cardType: CardType
  route: string
}

const Images: ImageObject[] = [
  {
    usluga: "Doznaka i otprema drvnih sortimenata",
    imgSrc: "/usluge/forest_truck_full_of_logs.png",
    imgAlt:
      "Kamion za odvoz drva vozi se šumskim putem s punim teretom trupaca",
    cardType: "small",
    route: "/usluge/#doznaka-i-otprema",
  },
  {
    usluga: "EU Fondovi",
    imgSrc: "/usluge/handshake.png",
    imgAlt: "Rukovanje dvaju muškaraca u odijelima",
    cardType: "big",
    route: "/eu-projekti",
  },
  {
    usluga: "Procjena vrijednosti šume i šumskog zemljišta",
    imgSrc: "/usluge/map.png",
    imgAlt: "Osoba pokazuje kemijskom olovkom po karti",
    cardType: "big",
    route: "/usluge/#procjena-vrijednosti-sume-i-sumskog-zemljista",
  },
  {
    usluga: "Izrada lovno gospodarskih planova",
    imgSrc: "/usluge/hogs.png",
    imgAlt: "Divlje svinje u šumi",
    cardType: "small",
    route: "/usluge/#lovnogospodarski-planovi",
  },
  {
    usluga: "Izrada šumsko gospodarskih planova",
    imgSrc: "/usluge/beech.png",
    imgAlt: "Bukva",
    cardType: "small",
    route: "/usluge/#sumskogospodarski-planovi",
  },
  {
    usluga: "Otkup drvnih sortimenata",
    imgSrc: "/usluge/timber_assortments.png",
    imgAlt: "Naslagana narezana drva",
    cardType: "big",
    route: "/usluge/#otkup-drvnih-sortimenata",
  },
]

const Usluge = () => {
  return (
    <section className="relative z-0 flex flex-col px-4 pb-36 sm:px-16 md:px-32 lg:mt-[46rem] ">
      <Usluge_bg className="absolute bottom-36 left-0 -z-10 hidden rotate-180 opacity-35 sm:block" />
      <div className="mt-10 flex items-center">
        <h2
          id="usluge"
          className="mr-auto text-3xl font-extrabold text-green-dark lg:before:absolute lg:before:left-0 lg:before:top-[3.3rem] lg:before:inline-block lg:before:h-[10px] lg:before:w-[100px] lg:before:bg-green-dark lg:after:absolute lg:after:right-0 lg:after:top-[3.3rem] lg:after:inline-block lg:after:h-[10px] lg:after:w-[45px] lg:after:bg-green-dark"
        >
          USLUGE
        </h2>
        <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-green-dark lg:hidden"></div>
      </div>
      <div className="mt-36 flex flex-col items-center">
        <div className="grid w-full max-w-[26rem] grid-cols-1 grid-rows-6 gap-5 md:max-w-[30rem] lg:max-w-3xl lg:grid-cols-3 lg:grid-rows-3">
          {Images.map((image, index) => (
            <UslugeCard
              key={index}
              nazivUsluge={image.usluga}
              imgSrc={image.imgSrc}
              imgAlt={image.imgAlt}
              cardType={image.cardType}
              route={image.route}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Usluge
