import { Metadata } from "next"
import MainWrapper from "@/components/ui/main"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Usluge",
}

const Usluge = () => {
  return (
    <MainWrapper>
      <section className="mb-12 mt-24 px-6 md:mb-16 md:mt-32 lg:mb-24 lg:mt-44 lg:px-11">
        <h1 className="w-full max-w-full text-3xl font-extrabold text-green-dark lg:text-center">
          Naše Usluge
        </h1>
        <h2
          id="doznaka-i-otprema"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Doznaka i Otprema
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <li className="list-inside">Doznaka stabala</li>
          <li className="mt-1 list-inside lg:mt-0">
            Otprema drvnih sortimenata
          </li>
        </ul>
        <h2
          id="procjena-vrijednosti-sume-i-sumskog-zemljista"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Procjena vrijednosti šume i šumskog zemljišta
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <li className="list-inside">
            Izrada elaborata procjene vrijednosti šumskih sastojina
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Procjena vrijednosti šuma i šumskog zemljišta{" "}
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Izračun vrijednosti drvne mase na panju
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Izračun vrijednosti šumskih šteta
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Izračun prihoda i rashoda u šumama
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Izračun sječivih mogućnosti šumskih sastojina
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Izračun vrijednosti pojedinačnih stabala
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Izračun tržišne vrijednosti šumskog zemljišta
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Procjena vrijednosti šuma na trasama dalekovoda, vodovoda, prometne
            i ostale infrastrukture
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Sve ostale usluge vještačenja u šumarstvu
          </li>
        </ul>
        <h2
          id="lovnogospodarski-planovi"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Lovnogospodarski Planovi
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <li className="list-inside">Lovnogospodarska osnova</li>
          <li className="mt-1 list-inside lg:mt-0">Program uzgoja divljači</li>
          <li className="mt-1 list-inside lg:mt-0">Program zaštite divljači</li>
          <li className="mt-1 list-inside lg:mt-0">
            Revizija lovnogospodarskih planova
          </li>
        </ul>
        <h2
          id="sumskogospodarski-planovi"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Šumskogospodarski Planovi
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <li className="list-inside">
            Osnova gospodarenja gospodarskom jedinicom
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Program gospodarenja gospodarskom jedinicom s planom upravljanja
            područjem ekološke mreže
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Program gospodarenja šumama privatnih posjednika
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Program gospodarenja šumama posebne namjene za potrebe obrane
            Republike Hrvatske
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Program gospodarenja šumskim sjemenskim objektima
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Program zaštite, njege i obnove šuma
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Program gospodarenja šumama posebne namjene kojima gospodari Pravna
            osoba
          </li>
        </ul>
        <h2
          id="otkup-drvnih-sortimenata"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Otkup drvnih sortimenata
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <li className="mt-1 list-inside lg:mt-0">
            Kupujemo drvne sortimente svih vrsta na panju, uz panj, na pomoćnom
            stovarištu
          </li>
        </ul>
        <h2
          id="Cestovni-prijevoz-vangabaritetnig-tereta"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Cestovni prijevoz vangabaritnog tereta
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <p>
            Tvrtka Anemona Natura d.o.o. nudi usluge cestovnog prijevoza
            vangabartnih tereta:
          </p>
          <ul
            className="mt-2 max-w-prose list-disc"
            style={{ listStyleType: "square" }}
          >
            <li className="mt-1 list-inside lg:mt-0">
              poljoprivredni i šumski strojevi
            </li>
            <li className="list-inside">strojevi građevinske mehanizacije</li>
            <li className="list-inside">
              ostale vrste tereta na području Hrvatske i Slovenije.
            </li>
          </ul>

          <div className="relative mt-8 flex flex-col gap-8 lg:flex-row lg:items-start">
            <Image
              src="/usluge/vangabaritetni-teret/kamion-2.jpeg"
              alt="Kamion Mercedes Benz Arocs"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
            <div className="right-[-18rem] top-6 lg:absolute">
              <p>Za pružanje usluge koristimo:</p>
              <ul
                className="mt-2 list-disc"
                style={{ listStyleType: "square" }}
              >
                <li className="list-inside">
                  Troosovinski tegljač Mercedes Benz Arocs
                </li>
                <li className="list-inside">
                  Dvoosovinsku niskopodnu poluprikolicu marke DOLL
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Image
              src="/usluge/vangabaritetni-teret/kamion-3.jpeg"
              alt="Kamion u transportu"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
            <Image
              src="/usluge/vangabaritetni-teret/kamion-1.jpeg"
              alt="Kamion na cesti"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          <p className="mt-4">
            Za upite o prijevozu ostalih kategorija te sve dodatne upite vezane
            uz cijenu i uslugu prijevoza možete nas kontaktirati na:
          </p>

          <p className="ml-8 mt-4">E-mail: anemona.natura.info@gmail.com</p>
          <p className="ml-8">Mobitel: +385 99 5452 421 ili +385 99 286 8188</p>
        </ul>
      </section>
    </MainWrapper>
  )
}

export default Usluge
