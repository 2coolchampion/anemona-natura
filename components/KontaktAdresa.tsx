import { PersonIcon, PhoneIcon, PinIcon, MailIcon } from "@/components/icons"

const KontaktAdresa = () => {
  return (
    <div className="mt-16 flex flex-col items-start justify-start space-y-4">
      <div className="flex  w-full items-center gap-4 p-4 sm:px-0">
        <PersonIcon className="h-8 w-8 text-background-light" />

        <div className="text-background-light">VL. Sabrina Hribar</div>
      </div>
      <div className="flex w-full items-center gap-4 p-4 sm:px-0">
        <PinIcon className="h-9 self-start text-background-light" />
        <div className="text-background-light">
          Anemona Natura d.o.o. <br /> M.J. Šporera 20 <br /> 47 000 Karlovac,
          Hrvatska
        </div>
      </div>
      <div className="flex w-full items-center gap-4 p-4 sm:px-0">
        <PhoneIcon className="h-8 w-8 text-background-light" />
        <div className="text-background-light underline">
          <a href="tel:%2B385992868188">+385 99 286 8188</a>
        </div>
      </div>
      <div className="flex w-full items-center gap-4 p-4 text-background-light underline sm:px-0">
        <MailIcon className="w-8 text-background-light" />
        <a href="mailto:anemona.natura.info@gmail.com">
          anemona.natura.info@gmail.com
        </a>
      </div>
    </div>
  )
}

export default KontaktAdresa
