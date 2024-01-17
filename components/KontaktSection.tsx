import React from "react"
import {
  PersonIcon,
  PhoneIcon,
  PinIcon,
  MailIcon,
  SendIcon,
} from "/public/icons/index.ts"
import sendEmail from "@/actions/sendEmail"

type KontaktSectionProps = {
  className?: string
}

const KontaktSection = ({ className }: KontaktSectionProps) => {
  return (
    <div className={className}>
      <section className="w-full bg-green-dark px-4 py-16 pb-20 sm:px-16 md:px-32">
        <div className="mt-10 flex items-center">
          <h2 className="mr-auto text-3xl font-extrabold text-background-light lg:hidden">
            KONTAKT
          </h2>
          <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-background-light lg:hidden"></div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-start space-y-4">
          <div className="flex  w-full items-center gap-4 p-4 sm:px-0">
            <PersonIcon className="h-8 w-8 text-background-light" />

            <div className="text-background-light">VL. Sabrina Hribar</div>
          </div>
          <div className="flex w-full items-center gap-4 p-4 sm:px-0">
            <PinIcon className="h-9 self-start text-background-light" />
            <div className="text-background-light">
              Anemona Natura d.o.o. <br /> M.J. Šporera 20 <br /> 47 000
              Karlovac, Hrvatska
            </div>
          </div>
          <div className="flex w-full items-center gap-4 p-4 sm:px-0">
            <PhoneIcon className="h-8 w-8 text-background-light" />
            <div className="text-background-light underline">
              <a href="tel:%2B385992868188">+385 99 286 8188</a>
            </div>
          </div>
          <div className="flex w-full items-center gap-4 p-4 text-background-light underline sm:px-0">
            <MailIcon className="w-8 text-background-light" />
            <a href="mailto:anemona.natura.info@gmail.com">
              anemona.natura.info@gmail.com
            </a>
          </div>
        </div>
      </section>
      <section className="w-full px-8 py-16 sm:px-16 md:px-32">
        <div className="flex flex-col space-y-8">
          <form
            action={async (formData) => {
              "use server"
              await sendEmail(formData)
            }}
          >
            <div className="felx felx-col ">
              <label htmlFor="ime" className="relative top-4 font-semibold">
                IME I PREZIME
              </label>
              <input
                type="name"
                name="ime"
                className="w-full border-b-4 border-b-green-dark bg-transparent"
                id="ime"
              />
            </div>
            <div className="felx felx-col ">
              <label htmlFor="email" className="relative top-4 font-semibold">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                className="w-full border-b-4 border-b-green-dark bg-transparent"
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
                name="kontaktTel"
                className="w-full border-b-4 border-b-green-dark bg-transparent"
                id="kontaktTel"
              />
            </div>
            <div className="felx felx-col ">
              <label htmlFor="poruka" className="font-semibold">
                PORUKA
              </label>
              <textarea
                className=" mt-2 h-32 w-full rounded-lg border-4 border-dashed border-green-light bg-transparent p-4 placeholder:text-green-light"
                id="poruka"
                name="poruka"
                placeholder="Upišite svoju poruku ovdje..."
              />
            </div>
            <button className="flex items-center justify-center rounded-lg bg-green-light p-2 font-extrabold text-white">
              POŠALJI PORUKU
              <SendIcon className="ml-2 w-4 text-white" />
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default KontaktSection
