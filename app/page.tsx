"use client"

import ImageCropTool from "@/components/ImageCropTool"
import ContactDesktop from "@/components/ContactDesktop"
import Image from "next/image"
import HeroImage from "../public/hero-images/v1.png"
import SadnjaImage from "../public/sadnja.png"
import Home1 from "@/components/Home1"
import { useEffect, useState } from "react"
import "./styles.css"

export default function Home() {
  return (
    <>
      <section className="h-[27rem] w-full bg-indigo-400 px-4 sm:h-[36rem] sm:px-16 md:px-32 lg:h-[42rem]">
        <div className="mt-[6rem] flex flex-col lg:mt-36">
          <h1 className="header-text text-4xl font-extrabold text-white"></h1>
          <button className="mt-8 w-48 bg-indigo-800 px-4 py-2 text-white">
            Istraži Ponudu
          </button>
        </div>
      </section>
      <div className="relative w-screen rounded-lg bg-indigo-200 lg:absolute lg:top-[27rem] lg:flex lg:min-w-[1023px] lg:max-w-[80vw] lg:items-center lg:justify-around lg:pt-16">
        <button className="absolute left-1/2 right-auto top-4 hidden -translate-x-1/2 rounded bg-indigo-500  px-4 py-2 font-extrabold text-white lg:block">
          <h2 className="text-xl font-extrabold text-white">KONTAKT</h2>
        </button>
        <section className="w-full bg-indigo-800 px-4 py-16 pb-20 sm:px-16 md:px-32">
          <div className="mt-10 flex items-center">
            <h2 className="mr-auto text-3xl font-extrabold text-white lg:hidden">
              KONTAKT
            </h2>
            <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-indigo-200 lg:hidden"></div>
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
        <section className="w-full px-8 py-16 sm:px-16 md:px-32">
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
      </div>
      <section className="relative flex w-screen flex-col px-4 pb-16 sm:px-16 md:px-32 lg:mt-[34rem] lg:min-w-[1023px] lg:max-w-[80vw]">
        <div className="mt-10 flex items-center">
          <h2 className="mr-auto text-3xl font-extrabold lg:before:absolute lg:before:left-0 lg:before:top-[3.3rem] lg:before:inline-block lg:before:h-[10px] lg:before:w-[100px] lg:before:bg-indigo-900 lg:after:absolute lg:after:right-0 lg:after:top-[3.3rem] lg:after:inline-block lg:after:h-[10px] lg:after:w-[45px] lg:after:bg-indigo-900">
            USLUGE
          </h2>
          <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-indigo-600 lg:hidden"></div>
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
      <section className="relative z-0 mt-20 flex w-screen flex-col px-4 py-16 sm:px-16 md:px-32 lg:min-w-[1023px] lg:max-w-[80vw] ">
        <Image
          src={SadnjaImage}
          fill
          alt="background image"
          className="-z-10 object-cover opacity-40"
        />
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold lg:before:absolute lg:before:left-0 lg:before:top-[7.3rem] lg:before:inline-block lg:before:h-[10px] lg:before:w-[100px] lg:before:bg-indigo-900 lg:after:absolute lg:after:right-0 lg:after:top-[7.3rem] lg:after:inline-block lg:after:h-[10px] lg:after:w-[45px] lg:after:bg-indigo-900">
            EU FONDOVI - PODMJERA 8.5.1
          </h2>
          <div className="-mr-4 h-[50px] w-[12px] flex-none bg-indigo-800  sm:-mr-16 sm:h-[10px] sm:w-[100px] lg:hidden"></div>
        </div>
        <h3 className="font-xs mt-1 font-light">
          TIP OPERACIJE 8.5.1 KONVERZIJA ŠUMA
        </h3>
        <p className="font-sm mt-6 max-w-md flex-none">
          Izrada programa konverzije degradiranih šumskih sastojina i šumskih
          kultura.
        </p>
        <p className="font-md mt-6 max-w-md">
          Do sada smo našim zadovoljnim klijentima osigurali preko{" "}
          <strong className="whitespace-nowrap font-extrabold">
            3 milijuna eura
          </strong>{" "}
          bespovratnih sredstava. U nastavku saznajte više o našim projektima te
          kako možete postati korisnik ove mjere.
        </p>
        <button className="mt-10 self-start rounded bg-indigo-900 p-2 px-4 font-semibold text-white">
          SAZNAJ VIŠE
        </button>
        <div className="flex justify-between"></div>
      </section>
      <section className="flex w-full flex-col bg-indigo-950 px-4 py-16 sm:px-16 md:items-center md:px-32">
        <div className="flex w-full flex-col items-start md:w-fit">
          <div className="mt-10 flex items-center justify-between self-stretch">
            <h2 className="text-3xl font-extrabold text-white">O NAMA</h2>
            <div className="-mr-4 h-[12px] w-[150px] bg-indigo-200 sm:hidden"></div>
          </div>
          <p className="font-sm mt-8 text-white sm:w-[36rem] ">
            Anemona Natura d.o.o. nudi specijalne usluge i savjetovanja u
            šumarstvu.
          </p>
          <p className="font-sm mt-6 text-white sm:w-[36rem]">
            Nudimo usluge doznake stabala i otpreme drvnih sortimenata, usluge
            održivog gospodarenja šumom, provodimo lovnogospodarske planove te
            nudimo identifikaciju katastarskih čestica na terenu kao i procjenu
            vrijednosti šume i šumskog zemljišta.
          </p>
          <p className="font-sm mt-6 text-white sm:w-[36rem]">
            Osim toga pružamo uslugu organizacije, savjetovanja i pripreme
            projekata iz Europskih fondova. Specijalizirani smo u izradi
            projekata za podmjeru 8.5.1. - konverzije šuma. Pripremamo i
            izrađujemo cjelokupnu dokumentaciju za potrebe projekta iz Europskih
            strukturnih i investicijskih fondova.
          </p>
          <p className="font-sm mt-6 text-white sm:w-[36rem]">
            Sjedište naše tvrtke nalazi se u Karlovcu, no rad uspješno obavljamo
            na području cijele Hrvatske.
          </p>
        </div>
      </section>
    </>
  )
}
