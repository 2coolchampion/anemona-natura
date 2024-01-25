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
      className={`after:content[' '] group relative z-0 flex h-56 flex-col  items-center justify-around overflow-hidden rounded-lg bg-green-dark text-center text-gray-100 after:absolute after:inset-0 after:bg-black/10 xl:h-56 ${
        cardType === "small" ? "col-span-1" : "col-span-1 lg:col-span-2"
      }`}
    >
      <h4 className="z-20 text-xl font-bold">{nazivUsluge}</h4>
      <button className="z-20">Saznaj više...</button>
      <div className="absolute inset-0 z-10 bg-black/20"></div>
      <Image
        src={imgSrc}
        alt={imgAlt}
        fill
        className="-z-20 scale-105 object-cover transition-all duration-1000 group-hover:scale-100"
      />
    </div>
  )
}

export default UslugeCard
