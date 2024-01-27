import KontaktAdresa from "./KontaktAdresa"
import KontaktFromaV2 from "./KontaktFormaV2"
import { B_b, B_dark, B_green, Leaf, Leaf_bottom } from "@/components/blobs"
// import BlobBrown from "@/components/blobs/b-b.svg"
// import BlobDark from "@/components/blobs/b-dark.svg"
// import BlobGreen from "@/components/blobs/b-green.svg"
// import Leaf from "@/components/blobs/leaf.svg"
// import LeafBottom from "@/components/blobs/leaf-bottom.svg"

const KontaktFormaLG = () => {
  return (
    <div className="textured absolute -bottom-[38rem] hidden w-[65vw] min-w-[60rem] max-w-[71rem] overflow-clip rounded-lg border-2 border-white border-opacity-60 pb-16 backdrop-blur-xl before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-white/55 before:to-white/35 before:content-[''] lg:grid lg:grid-cols-2 lg:grid-rows-[1.2fr_5fr]">
      <B_b className="absolute -right-8 -top-16 -z-10 opacity-20 blur-2xl" />
      <B_dark className="absolute -bottom-8 -left-36 -z-10 opacity-30 blur-2xl" />
      <B_green className="absolute -bottom-16 -right-64 -z-20 opacity-15" />
      <B_green className="after: absolute -bottom-16 -right-64 -z-20 opacity-70 blur-xl" />
      <Leaf className="absolute  -right-24 -top-16 -z-20  opacity-75" />
      <Leaf_bottom className="absolute -bottom-[25rem] -left-[38rem] -z-20 opacity-15" />
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
