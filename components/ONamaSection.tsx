import React from "react"

const ONamaSection = () => {
  return (
    <section className="flex w-full flex-col bg-green-dark px-4 py-16 sm:px-16 md:items-center md:px-32 lg:pb-24 2xl:max-w-[1535px]">
      <div className="flex w-full flex-col items-start md:w-fit">
        <div className="mt-10 flex items-center justify-between self-stretch">
          <h2 className="text-3xl font-extrabold text-background-light">
            O NAMA
          </h2>
          <div className="-mr-4 h-[12px] w-[150px] bg-background-light sm:hidden"></div>
        </div>
        <p className="font-sm mt-8 text-background-light sm:w-[36rem] ">
          Anemona Natura d.o.o. nudi specijalne usluge i savjetovanja u
          šumarstvu.
        </p>
        <p className="font-sm mt-6 text-background-light sm:w-[36rem]">
          Nudimo usluge doznake stabala i otpreme drvnih sortimenata, usluge
          održivog gospodarenja šumom, provodimo lovnogospodarske planove te
          nudimo identifikaciju katastarskih čestica na terenu kao i procjenu
          vrijednosti šume i šumskog zemljišta.
        </p>
        <p className="font-sm mt-6 text-background-light sm:w-[36rem]">
          Osim toga pružamo uslugu organizacije, savjetovanja i pripreme
          projekata iz Europskih fondova. Specijalizirani smo u izradi projekata
          za podmjeru 8.5.1. - konverzije šuma. Pripremamo i izrađujemo
          cjelokupnu dokumentaciju za potrebe projekta iz Europskih strukturnih
          i investicijskih fondova.
        </p>
        <p className="font-sm mt-6 text-background-light sm:w-[36rem]">
          Sjedište naše tvrtke nalazi se u Karlovcu, no rad uspješno obavljamo
          na području cijele Hrvatske.
        </p>
      </div>
    </section>
  )
}

export default ONamaSection
