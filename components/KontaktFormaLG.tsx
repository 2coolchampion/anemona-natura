import KontaktAdresa from "./KontaktAdresa"
import KontaktFromaV2 from "./KontaktFormaV2"

const KontaktFormaLG = () => {
  return (
    <div className="-mx-16 mt-28 hidden rounded-lg bg-gradient-to-t from-green-dark/35  to-black/15 pb-8 backdrop-blur-xl lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_5fr]">
      <div className="col-span-2 flex items-center justify-center">Kontakt</div>

      <div className="flex justify-end px-8">
        <div className="w-96">
          <KontaktFromaV2 />
        </div>
      </div>

      <div className="flex px-8">
        <div className="flex w-96 justify-center rounded-md bg-green-dark">
          <KontaktAdresa />
        </div>
      </div>
    </div>
  )
}

export default KontaktFormaLG
