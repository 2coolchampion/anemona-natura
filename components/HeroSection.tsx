import Image from "next/image"
import { ArrowDownIcon } from "@/components/icons"
import HeroImage from "../public/hero-images/v1-darkened.jpg"

const HeroSection = () => {
  return (
    <section className="relative z-0 h-[66vh] max-h-[650px] w-full bg-green-dark px-4 sm:px-16  md:px-32 2xl:max-w-[1535px] landscape:h-[100vh]">
      <Image
        src={HeroImage}
        alt="hero image"
        fill
        className="absolute inset-0 -z-10 object-cover object-left-bottom"
        priority
      />
      <div className="lg:pt-38 flex flex-col pt-56 lg:items-center">
        <h1 className="header-text text-4xl font-extrabold text-background-light lg:text-center"></h1>
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
  )
}

export default HeroSection
