import KontaktAdresa from "./KontaktAdresa"
import KontaktFromaV2 from "./KontaktFormaV2"
import BlobBrown from "@/components/blobs/b-b.svg"
import BlobDark from "@/components/blobs/b-dark.svg"
import BlobGreen from "@/components/blobs/b-green.svg"
import Leaf from "@/components/blobs/leaf.svg"
import LeafBottom from "@/components/blobs/leaf-bottom.svg"

const KontaktFormaLG = () => {
  return (
    <div className="textured relative mt-56 hidden w-[65vw] min-w-[60rem] max-w-[71rem] overflow-clip rounded-lg border-2 border-white border-opacity-60 pb-16 backdrop-blur-xl before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-white/55 before:to-white/35 before:content-[''] lg:grid lg:grid-cols-2 lg:grid-rows-[1.2fr_5fr]">
      <BlobBrown className="absolute -right-8 -top-16 -z-10 opacity-20 blur-2xl" />
      <BlobDark className="absolute -bottom-8 -left-36 -z-10 opacity-30 blur-2xl" />
      <BlobGreen className="absolute -bottom-16 -right-64 -z-20 opacity-15" />
      <BlobGreen className="after: absolute -bottom-16 -right-64 -z-20 opacity-70 blur-xl" />
      <Leaf className="absolute  -right-24 -top-16 -z-20  opacity-75" />
      <LeafBottom className="absolute -bottom-[25rem] -left-[38rem] -z-20 opacity-15" />
      <div className="col-span-2 flex items-center justify-center">
        <div className=" rounded-md  bg-green-dark px-4 py-2 text-lg font-semibold tracking-wide text-background-light">
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
