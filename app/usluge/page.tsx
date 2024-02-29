import MainWrapper from "@/components/ui/main"

const Usluge = () => {
  return (
    <MainWrapper>
      <section className="mb-12 mt-24 px-6 md:mb-16 md:mt-32 lg:mb-24 lg:mt-44 lg:px-11">
        <h1 className="text-3xl font-extrabold text-green-dark lg:text-center">
          Naše Usluge
        </h1>
        <h2
          id="doznaka-i-otprema"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Doznaka I Otprema
        </h2>
        <ul className="mt-2 list-disc" style={{ listStyleType: "square" }}>
          <li>Doznaka stabala</li>
          <li className="mt-1 lg:mt-0">Otprema drvnih sortimenata</li>
        </ul>
        <h2
          id="procjenja-vrijednosti-sume-i-sumskog-zemljista"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Procjena vrijednosti šume i šumskog zemljišta
        </h2>
        <ul className="mt-2 list-disc" style={{ listStyleType: "square" }}>
          <li>Izrada elaborata procjene vrijednosti šumskih sastojina</li>
          <li className="mt-1 lg:mt-0">
            Procjena vrijednosti šuma i šumskog zemljišta{" "}
          </li>
          <li className="mt-1 lg:mt-0">
            Izračun vrijednosti drvne mase na panju
          </li>
          <li className="mt-1 lg:mt-0">Izračun vrijednosti šumskih šteta</li>
          <li className="mt-1 lg:mt-0">Izračun prihoda i rashoda u šumama</li>
          <li className="mt-1 lg:mt-0">
            Izračun sječivih mogućnosti šumskih sastojina
          </li>
          <li className="mt-1 lg:mt-0">
            Izračun vrijednosti pojedinačnih stabala
          </li>
          <li className="mt-1 lg:mt-0">
            Izračun tržišne vrijednosti šumskog zemljišta
          </li>
          <li className="mt-1 lg:mt-0">
            Procjena vrijednosti šuma na trasama dalekovoda, vodovoda, prometne
            i ostale infrastrukture
          </li>
          <li className="mt-1 lg:mt-0">
            Sve ostale usluge vještačenja u šumarstvu
          </li>
        </ul>
        <h2
          id="lovnogospodarski-planovi"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Lovnogospodarski Planovi
        </h2>
        <ul className="mt-2 list-disc" style={{ listStyleType: "square" }}>
          <li>Lovnogospodarska osnova</li>
          <li className="mt-1 lg:mt-0">Program uzgoja divljači</li>
          <li className="mt-1 lg:mt-0">Program zaštite divljači</li>
          <li className="mt-1 lg:mt-0">Revizija lovnogospodarskih planova</li>
        </ul>
        <h2
          id="sumskogospodarski-planovi"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Šumskogospodarski Planovi
        </h2>
        <ul className="mt-2 list-disc" style={{ listStyleType: "square" }}>
          <li>Osnova gospodarenja gospodarskom jedinicom</li>
          <li className="mt-1 lg:mt-0">
            Program gospodarenja gospodarskom jedinicom s planom upravljanja
            područjem ekološke mreže
          </li>
          <li className="mt-1 lg:mt-0">
            Program gospodarenja šumama privatnih posjednika
          </li>
          <li className="mt-1 lg:mt-0">
            Program gospodarenja šumama posebne namjene za potrebe obrane
            Republike Hrvatske
          </li>
          <li className="mt-1 lg:mt-0">
            Program gospodarenja šumskim sjemenskim objektima
          </li>
          <li className="mt-1 lg:mt-0">Program zaštite, njege i obnove šuma</li>
          <li className="mt-1 lg:mt-0">
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
        <ul className="mt-2 list-disc" style={{ listStyleType: "square" }}>
          <li className="mt-1 lg:mt-0">
            Kupujemo drvne sortimente svih vrsta na panju, uz panj, na pomoćnom
            stovarištu
          </li>
        </ul>
      </section>
    </MainWrapper>
  )
}

export default Usluge
