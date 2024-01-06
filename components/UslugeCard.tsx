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
      className={`relative z-0 flex h-48 flex-col items-center justify-around overflow-hidden rounded-lg text-center text-background-light ${
        cardType === "small" ? "col-span-1" : "col-span-1 md:col-span-2"
      }`}
    >
      <h4 className="text-xl font-bold">{nazivUsluge}</h4>
      <button>Saznaj više...</button>
      <Image src={imgSrc} alt={imgAlt} fill className="-z-10 object-cover" />
    </div>
  )
}

export default UslugeCard
