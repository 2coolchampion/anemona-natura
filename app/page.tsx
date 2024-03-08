import SadnjaImage from "../public/sadnja.png"
import "./styles.css"
import KontaktSection from "@/components/KontaktSection"
import Usluge from "@/components/Usluge"
import Croatia from "../public/partners-images/croatia.png"
import Eu from "../public/partners-images/eu.png"
import EuInvestmentFunds from "../public/partners-images/euInvestmentFunds.png"
import RuralniRazvoj from "/public/partners-images/ruralniRazvoj.png"
import EUFondovi from "@/components/EUFondoviSection"
import ONamaSection from "@/components/ONamaSection"
import MainWrapper from "@/components/ui/main"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <>
      <MainWrapper>
        <HeroSection />
        <KontaktSection className="relative w-screen rounded-lg bg-background-green-light lg:hidden" />
        {/* <KontaktSectionXl className="hidden w-screen rounded-lg bg-indigo-200 lg:absolute lg:top-[27rem] lg:flex lg:min-w-[1023px] lg:max-w-[80vw] lg:items-center lg:justify-around lg:pt-16 2xl:right-16 2xl:top-28 2xl:w-[1024px]" /> */}
        <Usluge />
        <EUFondovi />
        <ONamaSection />
      </MainWrapper>
    </>
  )
}
