import Image from "next/image"
import { ArrowDownIcon } from "@/components/icons"
import HeroImage from "@/public/hero-images/v1.png"
import HeroImageMD from "@/public/hero-images/v1-cropped.png"
import HeroImageXS from "@/public/hero-images/v1-cropped-xs.png"
import KontaktFormaLG from "./KontaktFormaLG"
import { Glow, Bg_blur } from "@/components/blobs"

const HeroSection = () => {
  return (
    <section className="relative z-0 flex h-[66vh] max-h-[650px] w-full flex-col bg-green-dark px-4 sm:px-16 md:px-32 lg:max-h-[850px] lg:items-center 2xl:max-w-[1535px] landscape:h-[100vh]">
      <Image
        src={HeroImage}
        alt="hero image"
        fill
        className="absolute inset-0 -z-10 hidden object-cover object-left-bottom md:block"
        priority
        quality={100}
      />
      <div className="absolute inset-0 after:absolute after:inset-0 after:bg-black/15 md:hidden">
        <Image
          src={HeroImageMD}
          alt="hero image"
          fill
          className="absolute inset-0 -z-10 hidden object-cover object-left-bottom sm:block"
          priority
          quality={100}
        />
      </div>
      <div className="absolute inset-0 after:absolute after:inset-0 after:bg-black/15 md:hidden">
        <Image
          src={HeroImageXS}
          alt="hero image"
          fill
          className="absolute inset-0 -z-10 object-cover md:hidden"
          priority
          quality={100}
        />
      </div>
      <div className="group/grand flex flex-col pt-56 lg:items-center lg:pt-80">
        <h1 className="header-text relative z-10 text-4xl font-extrabold text-background-light md:max-w-[26rem] lg:max-w-[45rem] lg:text-center">
          <Glow className="pointer-events-none top-12 z-10 hidden scale-[235%] opacity-30 lg:absolute lg:block" />
          <Bg_blur className="absolute -top-3 -z-10 opacity-50 blur-xl" />
        </h1>
        <a
          href="#usluge"
          className="group/button z-20 mt-8 flex w-fit items-stretch overflow-clip rounded-md bg-green-dark text-background-light transition-all duration-200 hover:bg-green-dark-hover"
        >
          <div className="flex items-end bg-green-light px-3 py-2 transition-all duration-200 group-hover/button:bg-green-light-hover">
            <ArrowDownIcon className="mb-[2px] h-auto w-6" />
          </div>
          <p className="inline whitespace-nowrap px-5 py-2 text-xl font-bold">
            Istraži Ponudu
          </p>
        </a>
      </div>
      <KontaktFormaLG />
    </section>
  )
}

export default HeroSection
