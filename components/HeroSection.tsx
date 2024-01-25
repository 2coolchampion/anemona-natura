import Image from "next/image"
import { ArrowDownIcon } from "@/components/icons"
import HeroImage from "../public/hero-images/v1-darkened.jpg"
import KontaktFormaLG from "./KontaktFormaLG"
import Glow from "@/public/Blobs/glow.svg"

const HeroSection = () => {
  return (
    <section className="relative z-0 flex h-[66vh] max-h-[650px] w-full flex-col bg-green-dark px-4 sm:px-16 md:px-32 lg:max-h-[850px] lg:items-center 2xl:max-w-[1535px] landscape:h-[100vh]">
      <Image
        src={HeroImage}
        alt="hero image"
        fill
        className="absolute inset-0 -z-10 object-cover object-left-bottom"
        priority
      />
      <div className="flex flex-col pt-56 lg:items-center lg:pt-80">
        <h1 className="header-text relative z-10 text-4xl font-extrabold text-background-light md:max-w-[26rem] lg:max-w-[45rem] lg:text-center">
          <Glow className="pointer-events-none inset-0 top-12 z-10 hidden scale-[200%] lg:absolute lg:block" />
        </h1>
        <a href="#usluge" className="mt-8">
          <button className=" group flex w-fit items-stretch overflow-clip rounded-md bg-green-dark text-background-light backdrop-blur-sm transition-all duration-200 hover:bg-green-dark/95">
            <div className="flex items-end bg-green-light px-3 py-2 transition-all duration-200 group-hover:bg-green-light/80">
              <ArrowDownIcon className="mb-[2px] h-auto w-6" />
            </div>
            <p className="inline whitespace-nowrap px-5 py-2 text-xl font-bold">
              Istraži Ponudu
            </p>
          </button>
        </a>
      </div>
      <KontaktFormaLG />
    </section>
  )
}

export default HeroSection
