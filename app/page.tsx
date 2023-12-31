"use client"

import ImageCropTool from "@/components/ImageCropTool"
import ContactDesktop from "@/components/ContactDesktop"
import Image from "next/image"
import HeroImage from "../public/hero-images/v1.png"
import SadnjaImage from "../public/sadnja.png"
import Home1 from "@/components/Home1"
import { useEffect, useState } from "react"

export default function Home() {
  const [screenWidth, setScreenWidth] = useState<Number | undefined>(undefined)

  useEffect(() => {
    // Update the screenWidth state with the current window width
    const updateScreenWidth = () => setScreenWidth(window.innerWidth)

    // Set the initial screen width
    updateScreenWidth()

    // Add event listener for window resize
    window.addEventListener("resize", updateScreenWidth)

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateScreenWidth)
  }, [])

  const h11Classes = "text-4xl font-extrabold text-white"

  const renderHeaderText = () => {
    const screenWidth = window.innerWidth

    if (screenWidth === undefined) {
      return <p className={h11Classes}>SAVJETOVANJE I USLUGE U ŠUMARSTVU 😧</p>
    } else if (screenWidth < 640) {
      return <h1 className={h11Classes}>SAVJETOVANJE I USLUGE U ŠUMARSTVU</h1>
    } else {
      return (
        <h1 className={h11Classes}>
          SPECIJALNE USLUGE IS SAVJETOVANJE U ŠUMARSTVU
        </h1>
      )
    }
  }

  return (
    <>
      <div className=" h-16 w-full bg-indigo-500 text-white">Fake Nav</div>
      <section className="h-96 w-full flex-none bg-indigo-400 px-4">
        {renderHeaderText()}
      </section>
      <section className="w-full bg-indigo-800 px-4 pb-20">
        <div className="mt-10 flex items-center">
          <h2 className="mr-auto text-3xl font-extrabold text-white">
            KONTAKT
          </h2>
          <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-indigo-200"></div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-start space-y-4">
          <div className="flex items-center bg-indigo-500">
            <div className="h-4 w-4 bg-indigo-400"></div>
            <div className="text-white">
              Vlasnica <br /> Sabrina Hribar
            </div>
          </div>
          <div className="flex items-center bg-indigo-500">
            <div className="h-4 w-4 bg-indigo-400"></div>
            <div className="text-white">
              Vlasnica <br /> Sabrina Hribar
            </div>
          </div>
          <div className="flex items-center bg-indigo-500">
            <div className="h-4 w-4 bg-indigo-400"></div>
            <div className="text-white">+385 99 286 8188</div>
          </div>
          <div className="flex items-center bg-indigo-500">
            <div className="h-4 w-4 bg-indigo-400"></div>
            <div className="text-white">anemora.natura.info@gmail.com</div>
          </div>
        </div>
      </section>
      <section className="mt-20 h-fit w-full px-8">
        <div className="flex flex-col space-y-8">
          <div className="felx felx-col ">
            <label
              htmlFor="ime-i-prezime"
              className="relative top-4 font-semibold"
            >
              IME I PREZIME
            </label>
            <input
              type="name"
              className="w-full border-b-4 border-b-indigo-500 bg-transparent"
              id="ime-i-prezime"
            />
          </div>
          <div className="felx felx-col ">
            <label htmlFor="email" className="relative top-4 font-semibold">
              EMAIL
            </label>
            <input
              type="email"
              className="w-full border-b-4 border-b-indigo-500 bg-transparent"
              id="email"
            />
          </div>
          <div className="felx felx-col ">
            <label
              htmlFor="kontakt-telefon"
              className="relative top-4 font-semibold"
            >
              KONTAKT TELEFON
            </label>
            <input
              type="phone"
              className="w-full border-b-4 border-b-indigo-500 bg-transparent"
              id="kontakt-telefon"
            />
          </div>
          <div className="felx felx-col ">
            <label htmlFor="poruka" className="font-semibold">
              PORUKA
            </label>
            <textarea
              className=" mt-2 h-32 w-full rounded-lg border-4 border-dashed border-indigo-500 bg-transparent p-4"
              id="poruka"
              placeholder="Upišite svoju poruku ovdje..."
            />
          </div>
          <button className="flex items-center justify-center rounded-lg bg-indigo-600 p-2 font-extrabold text-white">
            POŠALJI PORUKU
            <div className="ml-2 inline-block h-4 w-4 bg-indigo-300"></div>
          </button>
        </div>
      </section>
      <section className="mt-20 flex w-full flex-col px-4">
        <div className="mt-10 flex items-center">
          <h2 className="mr-auto text-3xl font-extrabold">USLUGE</h2>
          <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-indigo-600"></div>
        </div>
        <div className="mt-16 flex flex-col">
          <div className="grid grid-cols-1 grid-rows-5 gap-5">
            <div className="flex h-36 flex-col items-center justify-around rounded-lg bg-indigo-400">
              <h4>Naziv usluge</h4>
              <button>Saznaj više...</button>
            </div>
            <div className="flex h-36 flex-col items-center justify-around rounded-lg bg-indigo-400">
              <h4>Naziv usluge</h4>
              <button>Saznaj više...</button>
            </div>
            <div className="flex h-36 flex-col items-center justify-around rounded-lg bg-indigo-400">
              <h4>Naziv usluge</h4>
              <button>Saznaj više...</button>
            </div>
            <div className="flex h-36 flex-col items-center justify-around rounded-lg bg-indigo-400">
              <h4>Naziv usluge</h4>
              <button>Saznaj više...</button>
            </div>
            <div className="flex h-36 flex-col items-center justify-around rounded-lg bg-indigo-400">
              <h4>Naziv usluge</h4>
              <button>Saznaj više...</button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 flex w-full flex-col bg-indigo-950 px-4 pb-10">
        <div className="mt-10 flex items-center">
          <h2 className="mr-auto text-3xl font-extrabold text-white">O NAMA</h2>
          <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-indigo-200"></div>
        </div>
        <p className="font-sm mt-4 text-white">
          Anemona Natura d.o.o. nudi specijalne usluge i savjetovanja u
          šumarstvu.
        </p>
        <p className="font-sm mt-4 text-white">
          Nudimo usluge doznake stabala i otpreme drvnih sortimenata, usluge
          održivog gospodarenja šumom, provodimo lovnogospodarske planove te
          nudimo identifikaciju katastarskih čestica na terenu kao i procjenu
          vrijednosti šume i šumskog zemljišta.
        </p>
        <p className="font-sm mt-4 text-white">
          Osim toga pružamo uslugu organizacije, savjetovanja i pripreme
          projekata iz Europskih fondova. Specijalizirani smo u izradi projekata
          za podmjeru 8.5.1. - konverzije šuma. Pripremamo i izrađujemo
          cjelokupnu dokumentaciju za potrebe projekta iz Europskih strukturnih
          i investicijskih fondova.
        </p>
        <p className="font-sm mt-4 text-white">
          Sjedište naše tvrtke nalazi se u Karlovcu, no rad uspješno obavljamo
          na području cijele Hrvatske.
        </p>
      </section>
    </>
  )
}
