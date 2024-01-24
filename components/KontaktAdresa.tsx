import { PersonIcon, PhoneIcon, PinIcon, MailIcon } from "@/components/icons"

const KontaktAdresa = () => {
  return (
    <div className="mt-16 flex flex-col items-start justify-start space-y-4 text-background-light">
      <div className="flex  w-full items-start gap-4 p-4 sm:px-0">
        <PersonIcon className="lg:text-green-super-light h-8 w-8" />

        <div className="lg:text-green-super-light lg:text-lg lg:font-bold">
          VL. Sabrina Hribar
        </div>
      </div>
      <div className="flex w-full items-start gap-4 p-4 sm:px-0">
        <PinIcon className="lg:text-green-super-light h-9 self-start" />
        <div>
          <h3 className="text-green-super-light hidden text-lg font-semibold lg:block">
            ADRESA
          </h3>
          Anemona Natura d.o.o. <br /> M.J. Šporera 20 <br /> 47 000 Karlovac,
          Hrvatska
        </div>
      </div>
      <div className="flex w-full items-center gap-4 p-4 sm:px-0">
        <PhoneIcon className="lg:text-green-super-light h-8 w-8 self-start" />
        <div className=" flex flex-col">
          <h3 className="text-green-super-light hidden text-lg font-semibold lg:block">
            BROJ TELEFONA
          </h3>
          <a href="tel:%2B385992868188" className="underline">
            +385 99 286 8188
          </a>
        </div>
      </div>
      <div className="flex w-full items-center gap-4 p-4 sm:px-0">
        <MailIcon className="lg:text-green-super-light w-8 self-start" />
        <div className="flex flex-col">
          <h3 className="text-green-super-light hidden text-lg font-semibold lg:block">
            EMAIL
          </h3>
          <a href="mailto:anemona.natura.info@gmail.com" className="underline">
            anemona.natura.info@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default KontaktAdresa
