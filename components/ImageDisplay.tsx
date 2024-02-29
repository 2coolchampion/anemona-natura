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
  {
    src: "/eu-projekti-images/1.png",
    alt: "alt",
    w: 650,
    h: 488,
    divClassName: "col-span-3",
  },
  {
    src: "/eu-projekti-images/2.png",
    alt: "alt",
    w: 650,
    h: 488,
    divClassName: "col-span-3",
  },
  {
    src: "/eu-projekti-images/3.png",
    alt: "alt",
    w: 422,
    h: 622,
    divClassName: "col-span-2",
  },
  {
    src: "/eu-projekti-images/4.png",
    alt: "alt",
    w: 871,
    h: 622,
    divClassName: "col-span-4",
  },
  {
    src: "/eu-projekti-images/5.png",
    alt: "alt",
    w: 650,
    h: 487,
    divClassName: "col-span-3",
  },
  {
    src: "/eu-projekti-images/6.png",
    alt: "alt",
    w: 650,
    h: 488,
    divClassName: "col-span-3",
  },
]

const ImagesDisplay = () => {
  const [isMobile, setIsMobile] = useState<null | boolean>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    // Cleanup function
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobile])

  if (isMobile) {
    return (
      <Carousel
        opts={{ align: "end", loop: true }}
        className="relative my-16 h-fit rounded-md bg-green-dark"
      >
        <CarouselContent>
          {Slike.map((slika, index) => {
            return (
              <CarouselItem key={index}>
                <div className="relative flex h-[24rem] w-full justify-center md:h-[40rem]">
                  <Image
                    alt={slika.alt}
                    src={slika.src}
                    className="object-contain"
                    fill
                    sizes="95vw"
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
      <div className="my-16 grid h-[100rem] w-full grid-cols-6 grid-rows-3 gap-3">
        {Slike.map((slika, i) => {
          return (
            <div key={i} className={`relative ${slika.divClassName}`}>
              <Image
                alt={slika.alt}
                fill
                src={slika.src}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 46vw, (max-width: 1919px) 37vw, 717px"
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ImagesDisplay
