import ImageCropTool from "@/components/ImageCropTool"
import ContactDesktop from "@/components/ContactDesktop"
import Image from "next/image"
import HeroImage from "../public/hero-images/v1-darkened.jpg"
import SadnjaImage from "../public/sadnja.png"
import Home1 from "@/components/Home1"
import "./styles.css"
import KontaktSection from "@/components/KontaktSection"
import Usluge from "@/components/Usluge"
import { ArrowDownIcon } from "/public/icons/index.ts"
import Croatia from "../public/partners-images/croatia.png"
import Eu from "../public/partners-images/eu.png"
import EuInvestmentFunds from "../public/partners-images/euInvestmentFunds.png"
import RuralniRazvoj from "/public/partners-images/ruralniRazvoj.png"
export default function Home() {
  return (
    <>
      <div className="flex w-screen flex-col justify-center bg-background-light lg:min-w-[1023px] lg:max-w-[80vw] 2xl:max-w-[1535px]">
        <section className="relative z-0 h-[66vh] max-h-[650px] w-full bg-indigo-400 px-4 sm:px-16  md:px-32 2xl:max-w-[1535px] landscape:h-[100vh]">
          <Image
            src={HeroImage}
            alt="hero image"
            fill
            className="absolute inset-0 -z-10 object-cover object-left-bottom"
            priority
          />
          <div className="flex flex-col pt-56 lg:mt-36">
            <h1 className="header-text text-4xl font-extrabold text-background-light"></h1>
            <button className="mt-8 flex w-fit items-stretch bg-green-dark text-background-light">
              <div className="flex items-end bg-green-light px-3 py-2">
                <ArrowDownIcon className="h-auto w-6" />
              </div>
              <p className="inline whitespace-nowrap px-5 py-2 text-xl font-bold">
                Istraži Ponudu
              </p>
            </button>
          </div>
        </section>
        <KontaktSection className="relative w-screen rounded-lg bg-background-green-light lg:hidden" />
        {/* <KontaktSectionXl className="hidden w-screen rounded-lg bg-indigo-200 lg:absolute lg:top-[27rem] lg:flex lg:min-w-[1023px] lg:max-w-[80vw] lg:items-center lg:justify-around lg:pt-16 2xl:right-16 2xl:top-28 2xl:w-[1024px]" /> */}
        <Usluge />
        <section className="relative z-0 mt-20 flex w-screen flex-col px-4 py-16 sm:px-16 md:px-32 lg:min-w-[1023px] lg:max-w-[80vw] 2xl:max-w-[1535px]">
          <Image
            src={SadnjaImage}
            fill
            alt="background image"
            className="-z-10 object-cover opacity-40"
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
          <p className="font-sm mt-6 max-w-md flex-none">
            Izrada programa konverzije degradiranih šumskih sastojina i šumskih
            kultura.
          </p>
          <p className="font-md mt-6 max-w-md">
            Do sada smo našim zadovoljnim klijentima osigurali preko{" "}
            <strong className="whitespace-nowrap font-extrabold">
              3 milijuna eura
            </strong>{" "}
            bespovratnih sredstava. U nastavku saznajte više o našim projektima
            te kako možete postati korisnik ove mjere.
          </p>
          <button className="mt-10 self-start rounded bg-green-dark p-2 px-4 font-semibold text-background-light">
            SAZNAJ VIŠE
          </button>
          <div className="mt-16 grid grid-cols-2  grid-rows-3 place-items-center gap-x-10 xs:grid-rows-[5rem_7rem] sm:grid-cols-2 sm:grid-rows-2  md:max-w-[38rem] md:grid-cols-4 md:grid-rows-1 md:justify-items-start xl:self-center 2xl:max-w-[50rem]">
            <div className="place relative min-h-[5rem] min-w-[5rem] max-w-[10rem] place-self-end xs:justify-self-center sm:order-1 md:justify-self-start ">
              <Image
                src={Croatia}
                alt="Croatian flag"
                fill
                className="absolute object-contain"
              />
            </div>
            <div className="align-self-center relative h-16 w-16 justify-self-start xs:justify-self-center sm:order-3 md:w-[4.3rem]">
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
        </section>
        <section className="flex w-full flex-col bg-green-dark px-4 py-16 sm:px-16 md:items-center md:px-32 2xl:max-w-[1535px]">
          <div className="flex w-full flex-col items-start md:w-fit">
            <div className="mt-10 flex items-center justify-between self-stretch">
              <h2 className="text-3xl font-extrabold text-background-light">
                O NAMA
              </h2>
              <div className="-mr-4 h-[12px] w-[150px] bg-background-light sm:hidden"></div>
            </div>
            <p className="font-sm mt-8 text-background-light sm:w-[36rem] ">
              Anemona Natura d.o.o. nudi specijalne usluge i savjetovanja u
              šumarstvu.
            </p>
            <p className="font-sm mt-6 text-background-light sm:w-[36rem]">
              Nudimo usluge doznake stabala i otpreme drvnih sortimenata, usluge
              održivog gospodarenja šumom, provodimo lovnogospodarske planove te
              nudimo identifikaciju katastarskih čestica na terenu kao i
              procjenu vrijednosti šume i šumskog zemljišta.
            </p>
            <p className="font-sm mt-6 text-background-light sm:w-[36rem]">
              Osim toga pružamo uslugu organizacije, savjetovanja i pripreme
              projekata iz Europskih fondova. Specijalizirani smo u izradi
              projekata za podmjeru 8.5.1. - konverzije šuma. Pripremamo i
              izrađujemo cjelokupnu dokumentaciju za potrebe projekta iz
              Europskih strukturnih i investicijskih fondova.
            </p>
            <p className="font-sm mt-6 text-background-light sm:w-[36rem]">
              Sjedište naše tvrtke nalazi se u Karlovcu, no rad uspješno
              obavljamo na području cijele Hrvatske.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
