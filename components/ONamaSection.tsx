import React from "react"

const ONamaSection = () => {
  return (
    <section className="flex w-full flex-col bg-green-dark px-4 py-16 sm:px-16 md:items-center md:px-32 lg:pb-24 2xl:max-w-[1535px]">
      <div className="flex w-full flex-col items-start md:w-fit">
        <div className="mt-10 flex items-center justify-between self-stretch">
          <h2 className="text-3xl font-extrabold text-background-light">
            ABOUT US
          </h2>
          <div className="-mr-4 h-[12px] w-[150px] bg-background-light sm:hidden"></div>
        </div>
        <p className="font-sm mt-8 text-background-light sm:w-[36rem] ">
          Anemona Natura d.o.o. provides specialist services and consulting in
          forestry.
        </p>
        <p className="font-sm mt-6 text-background-light sm:w-[36rem]">
          We offer tree marking and timber delivery services, sustainable forest
          management, implement hunting management plans, and provide on-site
          identification of cadastral parcels as well as forest and forest land
          valuation.
        </p>
        <p className="font-sm mt-6 text-background-light sm:w-[36rem]">
          In addition, we provide project organisation, consulting and
          preparation services for European funds. We specialise in projects
          under sub-measure 8.5.1 — forest conversion. We prepare and produce
          all the documentation required for projects funded by the European
          Structural and Investment Funds.
        </p>
        <p className="font-sm mt-6 text-background-light sm:w-[36rem]">
          Our company is headquartered in Karlovac, yet we successfully deliver
          our services across the whole of Croatia.
        </p>
      </div>
    </section>
  )
}

export default ONamaSection
