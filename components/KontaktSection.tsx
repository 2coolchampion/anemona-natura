import KontaktAdresa from "./KontaktAdresa"
import KontaktForma from "./KontaktForma"

type KontaktSectionProps = {
  className?: string
}

const KontaktSection = ({ className }: KontaktSectionProps) => {
  return (
    <div className={className}>
      <section className="w-full bg-green-dark px-4 py-16 sm:px-16 md:px-32">
        <div className="mt-10 flex items-center">
          <h2 className="mr-auto text-3xl font-extrabold text-background-light lg:hidden">
            KONTAKT
          </h2>
          <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-background-light lg:hidden"></div>
        </div>
        <KontaktAdresa />
      </section>
      <section className="w-full px-8 py-16 sm:px-16 md:px-32">
        <div className="flex flex-col space-y-8">
          <KontaktForma />
        </div>
      </section>
    </div>
  )
}

export default KontaktSection
