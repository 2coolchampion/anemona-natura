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
    usluga: "Tree marking and timber delivery",
    imgSrc: "/usluge/forest_truck_full_of_logs.png",
    imgAlt: "A truck loaded with logs driving along a forest road",
    cardType: "small",
    route: "/usluge/#doznaka-i-otprema",
  },
  {
    usluga: "EU Funds",
    imgSrc: "/usluge/handshake.png",
    imgAlt: "Two men in suits shaking hands",
    cardType: "big",
    route: "/eu-projekti",
  },
  {
    usluga: "Forest and forest land valuation",
    imgSrc: "/usluge/map.png",
    imgAlt: "A person pointing at a map with a pen",
    cardType: "big",
    route: "/usluge/#procjena-vrijednosti-sume-i-sumskog-zemljista",
  },
  {
    usluga: "Hunting management plans",
    imgSrc: "/usluge/hogs.png",
    imgAlt: "Wild boars in the forest",
    cardType: "small",
    route: "/usluge/#lovnogospodarski-planovi",
  },
  {
    usluga: "Forest management plans",
    imgSrc: "/usluge/beech.png",
    imgAlt: "Beech tree",
    cardType: "small",
    route: "/usluge/#sumskogospodarski-planovi",
  },
  {
    usluga: "Purchase of timber assortments",
    imgSrc: "/usluge/timber_assortments.png",
    imgAlt: "Stacked cut timber",
    cardType: "big",
    route: "/usluge/#otkup-drvnih-sortimenata",
  },
  {
    usluga: "Oversized cargo transport",
    imgSrc: "/usluge/vangabaritetni-teret/kamion-1.jpeg",
    imgAlt: "Stacked cut timber",
    cardType: "huge",
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
          SERVICES
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
