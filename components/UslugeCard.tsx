"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export type CardType = "small" | "big"

export type UslugeCardProps = {
  nazivUsluge: string
  cardType: CardType
  imgSrc: string
  imgAlt: string
}

const UslugeCard = ({
  nazivUsluge,
  cardType,
  imgSrc,
  imgAlt,
}: UslugeCardProps) => {
  const router = useRouter()

  return (
    <div
      onClick={() => {
        router.push("/usluge")
      }}
      className={`group relative z-0 flex h-56 cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-green-dark text-center text-white after:absolute after:inset-0 after:bg-black/10 xl:h-56 ${
        cardType === "small" ? "col-span-1" : "col-span-1 lg:col-span-2"
      }`}
    >
      <h4 className="z-20 mt-8 text-xl font-bold">{nazivUsluge}</h4>
      <button className="absolute inset-x-auto bottom-6 z-20">
        Saznaj više...
      </button>
      <div className="absolute inset-0 z-10 bg-black/20"></div>
      <Image
        src={imgSrc}
        alt={imgAlt}
        fill
        sizes="(max-width: 768px) 80vw, (max-width: 1028px) 50vw, (min-width: 1029px) 500px"
        className="-z-20 scale-105 object-cover transition-all duration-1000 group-hover:scale-100"
      />
    </div>
  )
}

export default UslugeCard
