import React from "react"

const Usluge = () => {
  return (
    <section className="relative flex w-screen flex-col px-4 pb-16 sm:px-16 md:px-32 lg:mt-[34rem] lg:min-w-[1023px] lg:max-w-[80vw] 2xl:max-w-[1535px]">
      <div className="mt-10 flex items-center">
        <h2 className="mr-auto text-3xl font-extrabold text-green-dark lg:before:absolute lg:before:left-0 lg:before:top-[3.3rem] lg:before:inline-block lg:before:h-[10px] lg:before:w-[100px] lg:before:bg-indigo-900 lg:after:absolute lg:after:right-0 lg:after:top-[3.3rem] lg:after:inline-block lg:after:h-[10px] lg:after:w-[45px] lg:after:bg-indigo-900">
          USLUGE
        </h2>
        <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-green-dark lg:hidden"></div>
      </div>
      <div className="mt-16 flex flex-col">
        <div className="grid grid-cols-1 grid-rows-5 gap-5">
          <div className="flex h-36 flex-col items-center justify-around rounded-lg bg-indigo-400">
            <h4>Naziv usluge</h4>
            <button>Saznaj više...</button>
          </div>
          <div className="flex h-36 flex-col items-center justify-around rounded-lg bg-indigo-400">
            <h4>Naziv usluge</h4>
            <button>Saznaj više...</button>
          </div>
          <div className="flex h-36 flex-col items-center justify-around rounded-lg bg-indigo-400">
            <h4>Naziv usluge</h4>
            <button>Saznaj više...</button>
          </div>
          <div className="flex h-36 flex-col items-center justify-around rounded-lg bg-indigo-400">
            <h4>Naziv usluge</h4>
            <button>Saznaj više...</button>
          </div>
          <div className="flex h-36 flex-col items-center justify-around rounded-lg bg-indigo-400">
            <h4>Naziv usluge</h4>
            <button>Saznaj više...</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Usluge
