import Image from "next/image"
import { ArrowDownIcon } from "@/components/icons"
import KontaktFormaLG from "./KontaktFormaLG"

import road_480_avif from "@/public/hero-image-optimized/road-480.avif"
import road_640_avif from "@/public/hero-image-optimized/road-640.avif"
import road_768_avif from "@/public/hero-image-optimized/road-768.avif"
import road_1024_avif from "@/public/hero-image-optimized/road-1024.avif"
import road_1535_avif from "@/public/hero-image-optimized/road-1535.avif"
import road_3070_avif from "@/public/hero-image-optimized/road-3070.avif"
import road_5464_avif from "@/public/hero-image-optimized/road-5464.avif"

import road_480_webp from "@/public/hero-image-optimized/road-480.webp"
import road_640_webp from "@/public/hero-image-optimized/road-640.webp"
import road_768_webp from "@/public/hero-image-optimized/road-768.webp"
import road_1024_webp from "@/public/hero-image-optimized/road-1024.webp"
import road_1535_webp from "@/public/hero-image-optimized/road-1535.webp"
import road_3070_webp from "@/public/hero-image-optimized/road-3070.webp"
import road_5464_webp from "@/public/hero-image-optimized/road-5464.webp"

import road_480_jpg from "@/public/hero-image-optimized/road-480moz.jpg"
import road_640_jpg from "@/public/hero-image-optimized/road-640moz.jpg"
import road_768_jpg from "@/public/hero-image-optimized/road-768moz.jpg"
import road_1024_jpg from "@/public/hero-image-optimized/road-1024moz.jpg"
import road_1535_jpg from "@/public/hero-image-optimized/road-1535moz.jpg"
import road_3070_jpg from "@/public/hero-image-optimized/road-3070moz.jpg"
import road_5464_jpg from "@/public/hero-image-optimized/road-5464moz.jpg"

import road_mob_2381_avif from "@/public/hero-image-optimized/road-mob-2381.avif"
import road_mob_1535_avif from "@/public/hero-image-optimized/road-mob-1535.avif"
import road_mob_1024_avif from "@/public/hero-image-optimized/road-mob-1024.avif"
import road_mob_768_avif from "@/public/hero-image-optimized/road-mob-768.avif"
import road_mob_640_avif from "@/public/hero-image-optimized/road-mob-640.avif"
import road_mob_480_avif from "@/public/hero-image-optimized/road-mob-480.avif"

import road_mob_2381_webp from "@/public/hero-image-optimized/road-mob-2381.webp"
import road_mob_1535_webp from "@/public/hero-image-optimized/road-mob-1535.webp"
import road_mob_1024_webp from "@/public/hero-image-optimized/road-mob-1024.webp"
import road_mob_768_webp from "@/public/hero-image-optimized/road-mob-768.webp"
import road_mob_640_webp from "@/public/hero-image-optimized/road-mob-640.webp"
import road_mob_480_webp from "@/public/hero-image-optimized/road-mob-480.webp"

import road_mob_2381_jpg from "@/public/hero-image-optimized/road-mob-2381moz.jpg"
import road_mob_1535_jpg from "@/public/hero-image-optimized/road-mob-1535moz.jpg"
import road_mob_1024_jpg from "@/public/hero-image-optimized/road-mob-1024moz.jpg"
import road_mob_768_jpg from "@/public/hero-image-optimized/road-mob-768moz.jpg"
import road_mob_640_jpg from "@/public/hero-image-optimized/road-mob-640moz.jpg"
import road_mob_480_jpg from "@/public/hero-image-optimized/road-mob-480moz.jpg"

import { Glow, Bg_blur } from "@/components/blobs"

const HeroSection = () => {
  return (
    <section className="relative z-0 flex h-[66vh] max-h-[650px] w-full flex-col bg-green-dark px-4 sm:px-16 md:px-32 lg:max-h-[850px] lg:items-center 2xl:max-w-[1535px] landscape:h-[100vh]">
      <picture>
        {/* AVIF format for smaller screens (if supported) */}
        <source
          media="(max-width: 639px)"
          type="image/avif"
          srcSet={`${road_mob_2381_avif.src} 2381w, ${road_mob_1535_avif.src} 1535w, ${road_mob_1024_avif.src} 1024w, ${road_mob_768_avif.src} 768w, ${road_mob_640_avif.src} 640w, ${road_mob_480_avif.src} 480w, `}
        />
        {/* AVIF format for larger screens (if supported) */}
        <source
          media="(min-width: 640px)"
          type="image/avif"
          srcSet={`${road_480_avif.src} 480w, ${road_640_avif.src} 640w, ${road_768_avif.src} 768w, ${road_1024_avif.src} 1024w, ${road_1535_avif.src} 1535w, ${road_3070_avif.src} 3070w`}
        />

        {/* WebP format for smaller screens (if supported) */}
        <source
          media="(max-width: 639px)"
          type="image/webp"
          srcSet={`${road_mob_2381_webp.src} 2381w, ${road_mob_1535_webp.src} 1535w, ${road_mob_1024_webp.src} 1024w, ${road_mob_768_webp.src} 768w, ${road_mob_640_webp.src} 640w, ${road_mob_480_webp.src} 480w, `}
        />
        {/* WebP format for larger screens (if supported) */}
        <source
          media="(min-width: 640px)"
          type="image/webp"
          srcSet={`${road_480_webp.src} 480w, ${road_640_webp.src} 640w, ${road_768_webp.src} 768w, ${road_1024_webp.src} 1024w, ${road_1535_webp.src} 1535w, ${road_3070_webp.src} 3070w`}
        />

        {/* jpg format for smaller screens */}
        <source
          media="(max-width: 639px)"
          type="image/jpeg"
          srcSet={`${road_mob_2381_jpg.src} 2381w, ${road_mob_1535_jpg.src} 1535w, ${road_mob_1024_jpg.src} 1024w, ${road_mob_768_jpg.src} 768w, ${road_mob_640_jpg.src} 640w, ${road_mob_480_jpg.src} `}
        />

        {/* jpg format for larger screens */}
        <source
          media="(min-width: 640px)"
          type="image/jpeg"
          srcSet={`${road_480_jpg.src} 480w, ${road_640_jpg.src} 640w, ${road_768_jpg.src} 768w, ${road_1024_jpg.src} 1024w, ${road_1535_jpg.src} 1535w, ${road_3070_jpg.src} 3070w`}
        />

        {/* Fallback for other formats (JPEG or PNG) */}
        <img
          src={`${road_1535_jpg.src}`}
          srcSet={`${road_640_jpg.src} 640w, ${road_1535_jpg.src} 1535w, ${road_3070_jpg.src} 3070w `}
          alt="hero image"
          className="absolute inset-0 -z-10 h-full w-full opacity-60 sm:opacity-100 md:block"
          style={{ objectFit: "cover", objectPosition: "50% 0%" }}
        />
      </picture>
      <div className="group/grand flex flex-col pt-56 lg:items-center lg:pt-80">
        <h1 className="header-text relative z-10 text-4xl font-extrabold text-background-light md:max-w-[26rem] lg:max-w-[45rem] lg:text-center">
          {/* <Glow className="pointer-events-none top-16 z-10 hidden scale-[235%] opacity-30 lg:absolute lg:block" /> */}
          <Bg_blur className="absolute -top-3 -z-10 opacity-50 blur-xl" />
        </h1>
        <a
          href="#usluge"
          className="group/button relative z-20 mt-8 flex w-fit items-stretch overflow-clip rounded-md bg-green-light text-background-light transition-all duration-75 after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-r after:from-green-light after:to-green-light-hover after:to-50% after:transition-opacity after:duration-75 hover:bg-green-light-hover hover:after:opacity-15"
        >
          <div className="flex items-end bg-green-light-hover px-3 py-2 transition-all duration-75 group-hover/button:bg-[#23AC59]">
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
