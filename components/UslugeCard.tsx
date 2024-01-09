import React from "react"
import Image from "next/image"

export type CardType = "small" | "big"

export type UslugeCardProps = {
  nazivUsluge: string
  cardType: string
  imgSrc: string
  imgAlt: string
}

const UslugeCard = ({
  nazivUsluge,
  cardType,
  imgSrc,
  imgAlt,
}: UslugeCardProps) => {
  return (
    <div
      className={`relative z-0 flex h-56 flex-col items-center justify-around overflow-hidden rounded-lg bg-black/70 text-center text-gray-100 xl:h-56 2xl:h-72 ${
        cardType === "small" ? "col-span-1" : "col-span-1 lg:col-span-2"
      }`}
    >
      <h4 className="z-20 text-xl font-bold">{nazivUsluge}</h4>
      <button className="z-20">Saznaj više...</button>
      <div className="absolute inset-0 z-10 bg-black/20"></div>
      <Image src={imgSrc} alt={imgAlt} fill className="-z-20 object-cover" />
    </div>
  )
}

export default UslugeCard
