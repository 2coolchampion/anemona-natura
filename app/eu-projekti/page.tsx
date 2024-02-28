import MainWrapper from "@/components/ui/main"
import Image from "next/image"
import ImageDisplay from "@/components/ImageDisplay"

const EUProjekti = () => {
  return (
    <MainWrapper>
      <section className="mt-28 px-6 md:mt-36 lg:px-11">
        <div className="flex max-w-[55rem] flex-col">
          <h1 className="text-3xl font-extrabold text-green-dark">
            EU PROJEKTI PODMJERA 8.5.1. - KONVERZIJA DEGRADIRANIH ŠUMSKIH
            SASTOJINA I ŠUMSKIH KULTURA
          </h1>
          <p className="mt-4 max-w-[42rem]">
            Klijentima pružamo uslugu organizacije, savjetovanja i pripreme
            projekata iz Europskih fondova. Specijalizirani smo u izradi
            projekata za podmjeru 8.5.1. — konverzija degradiranih šumskih
            sastojina i šumskih kultura. Pripremamo i izrađujemo cjelokupnu
            dokumentaciju za potrebe projekta iz Europskih strukturnih i
            investicijskih fondova.
          </p>
          <p className="mt-2 max-w-[42rem]">
            Prihvatljivi korisnici su šumoposjednici u skladu sa člankom 14.
            Zakona o šumama („Narodne novine", br. 68/2018, 115/2018, 98/2019,
            32/2020 i 145/20) te udruge šumoposjednika.{" "}
          </p>
          <p className="mt-2 max-w-[42rem]">
            Cilj pokretanja projekta je dodjela sredstava za prevođenje
            degradiranih šumskih sastojina, šumskih sastojina narušene strukture
            po vrstama drveća i šumskih kultura u,mješovite sastojine autohtonih
            vrsta drveća visokog uzgojnog oblika, a naš tim iza sebe ima brojne
            uspješne i ostvarene projekte koje možete pogledati u nastavku.
          </p>
        </div>
        <ImageDisplay />
      </section>
    </MainWrapper>
  )
}

export default EUProjekti
