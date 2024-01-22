import ImageCropTool from "@/components/ImageCropTool"
import ContactDesktop from "@/components/ContactDesktop"
import Image from "next/image"
import HeroImage from "../public/hero-images/v1-darkened.jpg"
import SadnjaImage from "../public/sadnja.png"
import Home1 from "@/components/Home1"
import "./styles.css"
import KontaktSection from "@/components/KontaktSection"
import Usluge from "@/components/Usluge"
import { ArrowDownIcon } from "@/components/icons"
import Croatia from "../public/partners-images/croatia.png"
import Eu from "../public/partners-images/eu.png"
import EuInvestmentFunds from "../public/partners-images/euInvestmentFunds.png"
import RuralniRazvoj from "/public/partners-images/ruralniRazvoj.png"
import EUFondovi from "@/components/EUFondoviSection"
import ONamaSection from "@/components/ONamaSection"

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
            <a href="#usluge">
              <button className="mt-8 flex w-fit items-stretch bg-green-dark text-background-light">
                <div className="flex items-end bg-green-light px-3 py-2">
                  <ArrowDownIcon className="h-auto w-6" />
                </div>
                <p className="inline whitespace-nowrap px-5 py-2 text-xl font-bold">
                  Istraži Ponudu
                </p>
              </button>
            </a>
          </div>
        </section>
        <KontaktSection className="relative w-screen rounded-lg bg-background-green-light lg:hidden" />
        {/* <KontaktSectionXl className="hidden w-screen rounded-lg bg-indigo-200 lg:absolute lg:top-[27rem] lg:flex lg:min-w-[1023px] lg:max-w-[80vw] lg:items-center lg:justify-around lg:pt-16 2xl:right-16 2xl:top-28 2xl:w-[1024px]" /> */}
        <Usluge />
        <EUFondovi />
        <ONamaSection />
      </div>
    </>
  )
}
