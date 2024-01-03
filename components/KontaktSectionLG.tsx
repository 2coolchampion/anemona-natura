import React from "react"

type KontaktSectionLGProps = {
  className?: string
}

const KontaktSectionLG = ({ className }: KontaktSectionLGProps) => {
  return (
    <div className={className}>
      <button className="absolute left-1/2 right-auto top-4 hidden -translate-x-1/2 rounded bg-indigo-500  px-4 py-2 font-extrabold text-white lg:block">
        <h2 className="text-xl font-extrabold text-white">KONTAKT</h2>
      </button>
      <section className="w-full bg-indigo-800 px-4 py-16 pb-20 sm:px-16 md:px-32">
        <div className="mt-10 flex items-center">
          <h2 className="mr-auto text-3xl font-extrabold text-white lg:hidden">
            KONTAKT
          </h2>
          <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-indigo-200 lg:hidden"></div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-start space-y-4">
          <div className="flex items-center bg-indigo-500">
            <div className="h-4 w-4 bg-indigo-400"></div>
            <div className="text-white">
              Vlasnica <br /> Sabrina Hribar
            </div>
          </div>
          <div className="flex items-center bg-indigo-500">
            <div className="h-4 w-4 bg-indigo-400"></div>
            <div className="text-white">
              Vlasnica <br /> Sabrina Hribar
            </div>
          </div>
          <div className="flex items-center bg-indigo-500">
            <div className="h-4 w-4 bg-indigo-400"></div>
            <div className="text-white">+385 99 286 8188</div>
          </div>
          <div className="flex items-center bg-indigo-500">
            <div className="h-4 w-4 bg-indigo-400"></div>
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
              className="w-full border-b-4 border-b-indigo-500 bg-transparent"
              id="ime-i-prezime"
            />
          </div>
          <div className="felx felx-col ">
            <label htmlFor="email" className="relative top-4 font-semibold">
              EMAIL
            </label>
            <input
              type="email"
              className="w-full border-b-4 border-b-indigo-500 bg-transparent"
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
              className="w-full border-b-4 border-b-indigo-500 bg-transparent"
              id="kontakt-telefon"
            />
          </div>
          <div className="felx felx-col ">
            <label htmlFor="poruka" className="font-semibold">
              PORUKA
            </label>
            <textarea
              className=" mt-2 h-32 w-full rounded-lg border-4 border-dashed border-indigo-500 bg-transparent p-4"
              id="poruka"
              placeholder="Upišite svoju poruku ovdje..."
            />
          </div>
          <button className="flex items-center justify-center rounded-lg bg-indigo-600 p-2 font-extrabold text-white">
            POŠALJI PORUKU
            <div className="ml-2 inline-block h-4 w-4 bg-indigo-300"></div>
          </button>
        </div>
      </section>
    </div>
  )
}

export default KontaktSectionLG
