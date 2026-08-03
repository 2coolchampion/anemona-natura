import { Metadata } from "next"
import MainWrapper from "@/components/ui/main"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Services",
}

const Usluge = () => {
  return (
    <MainWrapper>
      <section className="mb-12 mt-24 px-6 md:mb-16 md:mt-32 lg:mb-24 lg:mt-44 lg:px-11">
        <h1 className="w-full max-w-full text-3xl font-extrabold text-green-dark lg:text-center">
          Our Services
        </h1>
        <h2
          id="doznaka-i-otprema"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Tree Marking and Timber Delivery
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <li className="list-inside">Marking of trees for felling</li>
          <li className="mt-1 list-inside lg:mt-0">
            Delivery of timber assortments
          </li>
        </ul>
        <h2
          id="procjena-vrijednosti-sume-i-sumskog-zemljista"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Forest and Forest Land Valuation
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <li className="list-inside">
            Preparation of forest stand valuation reports
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Valuation of forests and forest land{" "}
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Calculation of the value of standing timber
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Assessment of forest damage values
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Calculation of forest revenues and costs
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Calculation of the allowable cut for forest stands
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Valuation of individual trees
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Calculation of the market value of forest land
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Valuation of forests along power lines, water pipelines, transport
            and other infrastructure routes
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            All other expert valuation services in forestry
          </li>
        </ul>
        <h2
          id="lovnogospodarski-planovi"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Hunting Management Plans
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <li className="list-inside">Hunting management framework</li>
          <li className="mt-1 list-inside lg:mt-0">Game breeding program</li>
          <li className="mt-1 list-inside lg:mt-0">Game protection program</li>
          <li className="mt-1 list-inside lg:mt-0">
            Revision of hunting management plans
          </li>
        </ul>
        <h2
          id="sumskogospodarski-planovi"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Forest Management Plans
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <li className="list-inside">
            Management framework for the forest management unit
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Forest management program for the management unit, including an
            ecological network area management plan
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Forest management program for private forest owners
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Forest management program for special-purpose forests serving the
            defense needs of the Republic of Croatia
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Forest seed object management program
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Forest protection, care and restoration program
          </li>
          <li className="mt-1 list-inside lg:mt-0">
            Forest management program for special-purpose forests managed by a
            legal entity
          </li>
        </ul>
        <h2
          id="otkup-drvnih-sortimenata"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Purchase of Timber Assortments
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <li className="mt-1 list-inside lg:mt-0">
            We purchase timber assortments of all species — on the stump, at
            roadside, or at an auxiliary storage yard
          </li>
        </ul>
        <h2
          id="Cestovni-prijevoz-vangabaritetnig-tereta"
          className="mt-8 text-2xl font-bold text-green-dark"
        >
          Road Transport of Oversized Cargo
        </h2>
        <ul
          className="mt-2 max-w-prose list-disc"
          style={{ listStyleType: "square" }}
        >
          <p>
            Anemona Natura d.o.o. offers road transport services for oversized
            cargo:
          </p>
          <ul
            className="mt-2 max-w-prose list-disc"
            style={{ listStyleType: "square" }}
          >
            <li className="mt-1 list-inside lg:mt-0">
              agricultural and forestry machinery
            </li>
            <li className="list-inside">construction machinery</li>
            <li className="list-inside">
              other types of cargo across Croatia and Slovenia.
            </li>
          </ul>

          <div className="relative mt-8 flex flex-col gap-8 lg:flex-row lg:items-start">
            <Image
              src="/usluge/vangabaritetni-teret/kamion-2.jpeg"
              alt="Mercedes-Benz Arocs truck"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
            <div className="right-[-18rem] top-6 lg:absolute">
              <p>For this service we use:</p>
              <ul
                className="mt-2 list-disc"
                style={{ listStyleType: "square" }}
              >
                <li className="list-inside">
                  Three-axle Mercedes-Benz Arocs tractor unit
                </li>
                <li className="list-inside">
                  Two-axle low-loader semi-trailer, brand DOLL
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Image
              src="/usluge/vangabaritetni-teret/kamion-3.jpeg"
              alt="Truck in transit"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
            <Image
              src="/usluge/vangabaritetni-teret/kamion-1.jpeg"
              alt="Truck on the road"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          <p className="mt-4">
            For enquiries about transporting other categories of cargo, and for
            any additional questions regarding transport prices and services,
            please contact us at:
          </p>

          <p className="ml-8 mt-4">Email: anemona.natura.info@gmail.com</p>
          <p className="ml-8">
            Mobile: +385 99 5452 421 or +385 99 286 8188
          </p>
        </ul>
      </section>
    </MainWrapper>
  )
}

export default Usluge
