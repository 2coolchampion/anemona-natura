import MainWrapper from "@/components/ui/main"
import Image from "next/image"
import ImageDisplay from "@/components/ImageDisplay"
import Croatia from "/public/partners-images/croatia.png"
import RuralniRazvoj from "/public/partners-images/ruralniRazvoj.png"
import EuInvestmentFunds from "/public/partners-images/euInvestmentFunds.png"
import Eu from "/public/partners-images/eu.png"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "EU Projects",
}

const EUProjekti = () => {
  return (
    <MainWrapper>
      <section className="mt-28 px-6 md:mt-36 lg:px-11">
        <div className="flex max-w-[55rem] flex-col">
          <h1 className="text-3xl font-extrabold text-green-dark">
            EU PROJECTS — SUB-MEASURE 8.5.1: CONVERSION OF DEGRADED FOREST
            STANDS AND FOREST PLANTATIONS
          </h1>
          <p className="mt-4 max-w-[42rem]">
            We provide our clients with project organisation, consulting and
            preparation services for European funds. We specialise in preparing
            projects under sub-measure 8.5.1 — the conversion of degraded forest
            stands and forest plantations. We prepare and produce all the
            documentation required for projects funded by the European
            Structural and Investment Funds.
          </p>
          <p className="mt-2 max-w-[42rem]">
            Eligible beneficiaries are forest owners in accordance with Article
            14 of the Forest Act (Official Gazette "Narodne novine", Nos.
            68/2018, 115/2018, 98/2019, 32/2020 and 145/20), as well as forest
            owners' associations.{" "}
          </p>
          <p className="mt-2 max-w-[42rem]">
            The aim of the project is to secure funding for converting degraded
            forest stands, forest stands with a disturbed tree-species
            structure, and forest plantations into mixed stands of
            autochthonous tree species of high forest form. Our team has a
            track record of numerous successful, completed projects, which you
            can browse below.
          </p>
        </div>
        <ImageDisplay />
        <div className="mb-10 mt-24 grid grid-cols-2  grid-rows-3 place-items-center gap-x-10 xs:grid-rows-[5rem_7rem] sm:grid-cols-2 sm:grid-rows-2  md:max-w-[38rem] md:grid-cols-4 md:grid-rows-1 md:justify-items-start 2xl:max-w-[50rem] 2xl:grid-cols-[7rem_6rem_10rem_10rem]">
          <div className="relative min-h-[5rem] min-w-[5rem] max-w-[10rem] place-self-end xs:justify-self-center sm:order-1 md:justify-self-start 2xl:w-[6rem]">
            <Image
              src={Croatia}
              alt="Croatian flag"
              fill
              className="absolute object-contain"
              sizes="90px"
            />
          </div>
          <div className=" relative h-16 w-16 self-center justify-self-start xs:justify-self-center sm:order-3 md:w-[4.3rem] 2xl:order-2 2xl:w-[5rem]">
            <Image
              src={Eu}
              alt="European flag"
              fill
              className="absolute object-contain"
              sizes="90px"
            />
          </div>
          <div className="relative  col-span-2 h-full min-w-40 place-self-center xs:col-span-1 sm:order-4 md:w-40">
            <Image
              src={EuInvestmentFunds}
              alt="European Structural and Investment Funds logo"
              fill
              className="absolute object-contain"
              sizes="170px"
            />
          </div>
          <div className="relative col-span-2 h-full w-40 place-self-center xs:col-span-1 sm:order-2 md:w-40">
            <Image
              src={RuralniRazvoj}
              alt="Rural Development Programme logo"
              fill
              className="absolute object-contain"
              sizes="170px"
            />
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}

export default EUProjekti
