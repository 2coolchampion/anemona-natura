import SadnjaImage from "../public/sadnja.png"
import Image from "next/image"
import Croatia from "/public/partners-images/croatia.png"
import RuralniRazvoj from "/public/partners-images/ruralniRazvoj.png"
import EuInvestmentFunds from "/public/partners-images/euInvestmentFunds.png"
import Eu from "/public/partners-images/eu.png"
import Link from "next/link"

const EUFondovi = () => {
  return (
    <section className="relative z-0 flex flex-col px-4 py-16 sm:px-16 md:px-32">
      <div className=" w-full lg:flex lg:max-w-3xl lg:flex-col 2xl:max-w-5xl">
        <Image
          src={SadnjaImage}
          fill
          alt="background image"
          className="-z-10 object-cover opacity-40"
          sizes="(min-width: 1024px) 1536px, 100vw"
          quality={100}
        />
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold text-green-dark lg:before:absolute lg:before:left-0 lg:before:top-[7.3rem] lg:before:inline-block lg:before:h-[10px] lg:before:w-[100px] lg:before:bg-green-dark lg:after:absolute lg:after:right-0 lg:after:top-[7.3rem] lg:after:inline-block lg:after:h-[10px] lg:after:w-[45px] lg:after:bg-green-dark">
            {" "}
            EU FONDOVI - PODMJERA 8.5.1{" "}
          </h2>{" "}
          <div className="-mr-4 h-[50px] w-[12px] flex-none bg-green-dark  sm:-mr-16 sm:h-[10px] sm:w-[100px] lg:hidden"></div>
        </div>
        <h3 className="font-xs mt-1 font-light">
          TIP OPERACIJE 8.5.1 KONVERZIJA ŠUMA
        </h3>
        <p className="font-sm mt-6 max-w-md flex-none 2xl:max-w-full">
          Izrada programa konverzije degradiranih šumskih sastojina i šumskih
          kultura.
        </p>
        <p className="font-md mt-6 max-w-md 2xl:max-w-3xl">
          Do sada smo našim zadovoljnim klijentima osigurali preko{" "}
          <strong className="whitespace-nowrap font-extrabold">
            3 milijuna eura
          </strong>{" "}
          bespovratnih sredstava. U nastavku saznajte više o našim projektima te
          kako možete postati korisnik ove mjere.
        </p>
        <Link href="/eu-projekti">
          <button className="mt-10 self-start rounded bg-green-dark p-2 px-4 font-semibold text-background-light transition-colors duration-75 ease-out hover:bg-green-light">
            Saznaj Više
          </button>
        </Link>

        <div className="mb-10 mt-24 grid grid-cols-2  grid-rows-3 place-items-center gap-x-10 xs:grid-rows-[5rem_7rem] sm:grid-cols-2 sm:grid-rows-2  md:max-w-[38rem] md:grid-cols-4 md:grid-rows-1 md:justify-items-start 2xl:max-w-[50rem] 2xl:grid-cols-[7rem_6rem_10rem_10rem]">
          <div className="relative min-h-[5rem] min-w-[5rem] max-w-[10rem] place-self-end xs:justify-self-center sm:order-1 md:justify-self-start 2xl:w-[6rem]">
            <Image
              src={Croatia}
              alt="Croatian flag"
              fill
              className="absolute object-contain"
            />
          </div>
          <div className=" relative h-16 w-16 self-center justify-self-start xs:justify-self-center sm:order-3 md:w-[4.3rem] 2xl:order-2 2xl:w-[5rem]">
            <Image
              src={Eu}
              alt="European flag"
              fill
              className="absolute object-contain"
            />
          </div>
          <div className="relative  col-span-2 h-full min-w-40 place-self-center xs:col-span-1 sm:order-4 md:w-40">
            <Image
              src={EuInvestmentFunds}
              alt="croatian fill flag"
              fill
              className="absolute object-contain"
            />
          </div>
          <div className="relative col-span-2 h-full w-40 place-self-center xs:col-span-1 sm:order-2 md:w-40">
            <Image
              src={RuralniRazvoj}
              alt="croatian fill flag"
              fill
              className="absolute object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EUFondovi
