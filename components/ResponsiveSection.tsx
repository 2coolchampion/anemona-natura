import React from "react"

const ResponsiveSection = () => {
  return (
    <>
      <div className="grid grid-cols-6 content-end gap-6 bg-pink-100 px-4 sm:px-16 md:px-32 lg:grid-cols-12">
        <div className=" bg-pink-400 text-center font-black text-white">1</div>
        <div className=" bg-pink-400"></div>
        <div className=" bg-pink-400"></div>
        <div className=" bg-pink-400"></div>
        <div className=" bg-pink-400"></div>
        <div className=" bg-pink-400"></div>
        <div className=" hidden bg-pink-400 lg:block"></div>
        <div className=" hidden bg-pink-400 lg:block"></div>
        <div className=" hidden bg-pink-400 lg:block"></div>
        <div className=" hidden bg-pink-400 lg:block"></div>
        <div className=" hidden bg-pink-400 lg:block"></div>
        <div className=" hidden bg-pink-400 lg:block"></div>
      </div>
      <section className="SECTION flex w-full flex-col bg-orange-700 px-4 sm:px-16 md:px-32">
        <div className="FLEXBOX flex flex-col bg-blue-500 2xl:px-32">
          <h2 className="text-2xl font-extrabold text-white">Heading 2</h2>
        </div>
        <div className="FLEXBOX flex flex-col items-stretch">
          <div className="GRID grid grid-cols-1 gap-6 bg-orange-600 2xl:px-32">
            <div className="bg-orange-100 text-center">1</div>
            <div className="bg-orange-100 text-center">2</div>
            <div className="bg-orange-100 text-center">3</div>
            <div className="bg-orange-100 text-center">4</div>
            <div className="bg-orange-100 text-center">5</div>
            <div className="bg-orange-100 text-center">6</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResponsiveSection
