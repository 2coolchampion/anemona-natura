import React from "react"
import Image from "next/image"
import HeroImage from "/public/hero-images/v1.png"
import SadnjaImage from "/public/sadnja.png"
import ContactDesktop from "./ContactDesktop"

const Home1 = () => {
  return (
    <>
      <div className="main-container w-[100vw] flex-initial 2xl:w-[1536px]">
        <div className="relative h-[33rem]  flex-initial bg-red-800 bg-opacity-10">
          <Image
            src={HeroImage}
            alt="Forest fog"
            priority
            fill
            style={{
              objectFit: "cover",
              objectPosition: "left bottom",
            }}
          ></Image>
          <div className="relative grid h-full w-full grid-cols-[34rem_1fr] grid-rows-1 justify-start">
            <div className="span-cols-1 lgml-[130px] ml-[50px] flex flex-col items-end self-center justify-self-start">
              <h1 className=" text-right text-4xl font-extrabold text-white">
                SPECIJALNE USLUGE <br /> I SAVEJTOVANJE <br /> U ŠUMARSTVU
              </h1>
              <button className="mt-8 rounded bg-gray-100 p-4">
                Pogledaj Ponudu
              </button>
            </div>
            <ContactDesktop />
          </div>
        </div>
        <section className="mt-40 flex w-full">
          <div className="inline-block h-8 w-[130px] bg-green-700"></div>
          <div className="flex flex-grow items-start">
            <div className="gb-green-brand mt-[15px] inline-block h-[10px] w-[100px]"></div>
            <div className="flex-1">
              <h2 className="inlin ml-8 text-3xl font-extrabold">USLUGE</h2>
              <div className="mx-8 mt-8 grid grid-cols-3 grid-rows-3 gap-8">
                <div className="col-span-2 h-72 rounded bg-blue-300">
                  Div element text...
                  <br /> And another line
                </div>
                <div className="rounded bg-blue-300">Div element text...</div>
                <div className="rounded bg-blue-300">Eu Projekti</div>
                <div className="col-span-2  rounded bg-blue-300 hover:bg-blue-100">
                  Div element text...
                </div>
                <div className="col-span-2 rounded bg-blue-300">
                  Div element text...
                </div>
                <div className="rounded bg-blue-300 ">Div element text...</div>
              </div>
            </div>
            <div className="gb-green-brand ml-[55px] mt-[15px] inline-block h-[10px] w-[45px]"></div>
          </div>
          <div className="inline-block h-8 w-[130px] bg-green-700"></div>
        </section>

        <section className="mt-32 flex w-full">
          <div className="inline-block h-8 w-[130px] bg-green-700"></div>
          <div className="relative z-0 flex h-[676px] flex-grow">
            <Image
              src={SadnjaImage}
              fill
              alt="background image"
              className="-z-10 object-cover opacity-35"
            />

            <div className="gb-green-brand inline-block h-[10px] w-[100px]"></div>
            <div className="relative flex-grow pt-28">
              <h2 className="inlin ml-8 max-w-3xl text-3xl font-extrabold">
                EU FONDOVI - PODMJERA 8.5.1
              </h2>
              <h3 className="mt-2 max-w-3xl px-8 text-base">
                TIP OPERACIJE 8.5.1. KONVERZIJE ŠUMA
              </h3>
              <p className="mt-8 max-w-3xl pl-8 text-xl">
                Izrada programa konverzije degradiranih šumskih sastojina i
                šumskih kultura.
              </p>
              <p className="mt-8 max-w-3xl pl-8 text-xl">
                Do sada smo našim zadovoljnim klijentima osigurali preko{" "}
                <strong>3 milijuna eura</strong> bespovratnih sredstava. U
                nastavku saznajte više o našim projektima te kako možete postati
                korisnik ove mjere.
              </p>
            </div>
            <div className="gb-green-brand inline-block h-[10px] w-[45px]"></div>
          </div>
          <div className="inline-block h-8 w-[130px] bg-green-700"></div>
        </section>
      </div>
    </>
  )
}

export default Home1
