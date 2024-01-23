import KontaktAdresa from "./KontaktAdresa"
import KontaktFromaV2 from "./KontaktFormaV2"

const KontaktFormaLG = () => {
  return (
    <div className="textured relative mt-56 hidden w-[65vw] min-w-[60rem] max-w-[71rem] overflow-clip rounded-lg pb-16 backdrop-blur-xl before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-t before:from-green-dark/35 before:to-white/5 before:content-[''] lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_5fr]">
      <div className="col-span-2 flex items-start justify-center">
        <div className="mt-5 rounded-md  bg-green-dark px-4 py-1 text-lg font-semibold tracking-wide text-background-light">
          <h2>KONTAKT</h2>
        </div>
      </div>

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
