import KontaktAdresa from "./KontaktAdresa"

const KontaktFormaLG = () => {
  return (
    <div className="-mx-16 mt-28 hidden rounded-lg bg-white/35 pb-8 backdrop-blur-md lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_5fr]">
      <div className="col-span-2 flex items-center justify-center">Kontakt</div>

      <div className="flex justify-end px-8">
        <div className="w-96">
          <KontaktFroma />
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
