import MainWrapper from "@/components/ui/main"
import Image from "next/image"
import Slika1 from "@/public/eu-projekti-images/1.png"
import Slika2 from "@/public/eu-projekti-images/2.png"
import Slika3 from "@/public/eu-projekti-images/3.png"
import Slika4 from "@/public/eu-projekti-images/4.png"
import Slika5 from "@/public/eu-projekti-images/5.png"
import Slika6 from "@/public/eu-projekti-images/6.png"

const EUProjekti = () => {
  return (
    <MainWrapper>
      <section className="mt-48 px-6 lg:px-11">
        <div className="flex max-w-[55rem] flex-col">
          <h1 className="text-3xl font-extrabold text-green-dark">
            EU PROJEKTI PODMJERA 8.5.1. - KONVERZIJA DEGRADIRANIH ŠUMSKIH
            SASTOJINA I ŠUMSKIH KULTURA
          </h1>
          <p className="mt-4 max-w-[42rem]">
            klijentima pružamo uslugu organizacije, savjetovanja i pripreme
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
        <div className="my-16 grid h-[70rem] w-full grid-cols-6 grid-rows-3 gap-3">
          {/* TODO - Add appropriate alt tags */}
          <div className="relative col-span-3">
            <Image alt="slika" fill src={Slika1} className="object-cover" />
          </div>
          <div className="relative col-span-3 bg-gray-200">
            <Image alt="slika" fill src={Slika2} className="object-cover" />
          </div>
          <div className="relative col-span-2 bg-gray-300">
            <Image alt="slika" fill src={Slika3} className="object-cover" />
          </div>
          <div className="relative col-span-4 bg-gray-400">
            <Image alt="slika" fill src={Slika4} className="object-cover" />
          </div>
          <div className="relative col-span-3 bg-gray-500">
            <Image alt="slika" fill src={Slika5} className="object-cover" />
          </div>
          <div className="relative col-span-3 bg-gray-600">
            <Image alt="slika" fill src={Slika6} className="object-cover" />
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}

export default EUProjekti
