import React from "react"
import {
  PersonIcon,
  PhoneIcon,
  PinIcon,
  MailIcon,
  SendIcon,
} from "/public/icons/index.ts"

type KontaktSectionProps = {
  className?: string
}

const KontaktSection = ({ className }: KontaktSectionProps) => {
  return (
    <div className={className}>
      <section className="bg-green-dark w-full px-4 py-16 pb-20 sm:px-16 md:px-32">
        <div className="mt-10 flex items-center">
          <h2 className="text-background-light mr-auto text-3xl font-extrabold lg:hidden">
            KONTAKT
          </h2>
          <div className="bg-background-light -mr-4 ml-auto h-[12px] w-[150px] lg:hidden"></div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-start space-y-4">
          <div className="flex w-full items-center gap-4 p-4">
            <PersonIcon className="text-background-light h-8 w-8" />

            <div className="text-white">
              Vlasnica <br /> Sabrina Hribar
            </div>
          </div>
          <div className="flex w-full items-center gap-4 p-4">
            <PinIcon className="text-background-light h-9" />
            <div className="text-white">
              Adreasa1 <br /> Adresa 2
            </div>
          </div>
          <div className="flex w-full items-center gap-4 p-4">
            <PhoneIcon className="text-background-light h-8 w-8" />
            <div className="text-white underline">+385 99 286 8188</div>
          </div>
          <div className="flex w-full items-center gap-4 p-4">
            <MailIcon className="text-background-light w-8" />
            <div className="text-white">anemora.natura.info@gmail.com</div>
          </div>
        </div>
      </section>
      <section className="w-full px-8 py-16 sm:px-16 md:px-32">
        <div className="flex flex-col space-y-8">
          <div className="felx felx-col ">
            <label
              htmlFor="ime-i-prezime"
              className="relative top-4 font-semibold"
            >
              IME I PREZIME
            </label>
            <input
              type="name"
              className="border-b-green-dark w-full border-b-4 bg-transparent"
              id="ime-i-prezime"
            />
          </div>
          <div className="felx felx-col ">
            <label htmlFor="email" className="relative top-4 font-semibold">
              EMAIL
            </label>
            <input
              type="email"
              className="border-b-green-dark w-full border-b-4 bg-transparent"
              id="email"
            />
          </div>
          <div className="felx felx-col ">
            <label
              htmlFor="kontakt-telefon"
              className="relative top-4 font-semibold"
            >
              KONTAKT TELEFON
            </label>
            <input
              type="phone"
              className="border-b-green-dark w-full border-b-4 bg-transparent"
              id="kontakt-telefon"
            />
          </div>
          <div className="felx felx-col ">
            <label htmlFor="poruka" className="font-semibold">
              PORUKA
            </label>
            <textarea
              className=" border-green-light placeholder:text-green-light mt-2 h-32 w-full rounded-lg border-4 border-dashed bg-transparent p-4"
              id="poruka"
              placeholder="Upišite svoju poruku ovdje..."
            />
          </div>
          <button className="bg-green-light flex items-center justify-center rounded-lg p-2 font-extrabold text-white">
            POŠALJI PORUKU
            <SendIcon className="ml-2 w-4 text-white" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default KontaktSection
