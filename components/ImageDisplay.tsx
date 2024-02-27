"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

// TODO add appropriate alt tags

const Slike = [
  { src: "/eu-projekti-images/1.png", alt: "alt", w: 650, h: 488 },
  { src: "/eu-projekti-images/2.png", alt: "alt", w: 650, h: 488 },
  { src: "/eu-projekti-images/3.png", alt: "alt", w: 422, h: 622 },
  { src: "/eu-projekti-images/4.png", alt: "alt", w: 871, h: 622 },
  { src: "/eu-projekti-images/5.png", alt: "alt", w: 650, h: 487 },
  { src: "/eu-projekti-images/6.png", alt: "alt", w: 650, h: 488 },
]

const ImagesDisplay = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener("resize", handleResize)
    // Cleanup function
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobile])

  if (isMobile) {
    return (
      <Carousel
        opts={{ align: "end", loop: true }}
        className="relative mt-16 h-fit rounded-md bg-green-dark"
      >
        <CarouselContent>
          {Slike.map((slika, index) => {
            return (
              <CarouselItem key={index}>
                <div className="flex h-full justify-center">
                  <Image
                    alt={slika.alt}
                    src={slika.src}
                    className="object-contain"
                    width={slika.w}
                    height={slika.h}
                  />
                </div>
              </CarouselItem>
            )
          })}{" "}
        </CarouselContent>
        <CarouselPrevious className="absolute bottom-8 left-8 scale-125 border-green-dark bg-green-dark text-background-light hover:border-green-dark-hover hover:bg-green-dark-hover hover:text-white" />
        <CarouselNext className="bottom-8 right-8 scale-125 border-green-dark bg-green-dark text-background-light hover:border-green-dark-hover hover:bg-green-dark-hover hover:text-white" />
      </Carousel>
    )
  } else {
    return (
      // TODO add resopnsive height - make the grid larger as screen width gets wider
      <div className="my-16 grid h-[70rem] w-full grid-cols-6 grid-rows-3 gap-3">
        <div className="relative col-span-3">
          <Image
            alt={Slike[0].alt}
            fill
            src={Slike[0].src}
            className="object-cover"
          />
        </div>
        <div className="relative col-span-3 bg-gray-200">
          <Image alt="slika" fill src={Slike[1].src} className="object-cover" />
        </div>
        <div className="relative col-span-2 bg-gray-300">
          <Image alt="slika" fill src={Slike[2].src} className="object-cover" />
        </div>
        <div className="relative col-span-4 bg-gray-400">
          <Image alt="slika" fill src={Slike[3].src} className="object-cover" />
        </div>
        <div className="relative col-span-3 bg-gray-500">
          <Image alt="slika" fill src={Slike[4].src} className="object-cover" />
        </div>
        <div className="relative col-span-3 bg-gray-600">
          <Image alt="slika" fill src={Slike[5].src} className="object-cover" />
        </div>
      </div>
    )
  }
}

export default ImagesDisplay
