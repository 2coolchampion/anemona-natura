import KontaktAdresa from "./KontaktAdresa"
import KontaktFroma from "./KontaktForma"

const KontaktFormaLG = () => {
  return (
    <div className="-mx-16 mt-28 hidden lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_5fr]">
      <div className="col-span-2 flex items-center justify-center bg-green-800">
        Kontakt
      </div>

      <div className="flex justify-end  bg-green-300 p-8">
        <div className="w-96 bg-green-400">
          <KontaktFroma />
        </div>
      </div>

      <div className="flex bg-green-300 p-8">
        <div className="flex w-96 justify-center bg-green-600">
          <KontaktAdresa />
        </div>
      </div>
    </div>
  )
}

export default KontaktFormaLG
