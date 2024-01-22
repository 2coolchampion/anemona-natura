import { PersonIcon, PhoneIcon, MailIcon } from "./icons"
const Footer = () => {
  return (
    <footer className="relative flex h-12 w-full flex-col justify-center bg-green-dark text-center text-xs text-background-light lg:h-64 lg:py-8">
      <div className="hidden h-fit w-full justify-center lg:flex">
        <div className="flex flex-col items-start border-r border-dashed pr-32">
          <h4 className="text-sm font-medium">STRANICE</h4>
          <ul className="mt-2 flex flex-col flex-wrap items-start font-light leading-6">
            <li className="text-background-light">Naslovnica</li>
            <li className="text-background-light">Usluge</li>
            <li className="text-background-light">EU Projekti</li>
          </ul>
        </div>
        <div className="flex flex-col items-start px-32">
          <h4 className="text-sm font-medium">KONTAKT</h4>
          <ul className="mt-2 flex flex-col flex-wrap items-start font-light leading-6">
            <li className="text-background-light">
              <PersonIcon className="mr-2 inline-block h-4 w-4 fill-current" />
              VL. Sabrina Hribar
            </li>
            <li className="text-background-light">
              {" "}
              <PhoneIcon className="mr-2 inline-block h-4 w-4 fill-current" />
              099 286 8118
            </li>
            <li className="text-background-light">
              {" "}
              <MailIcon className="mr-2 inline-block h-4 w-4 fill-current" />
              anemona.natura.info@gmail.com
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start ">
          <h4 className="text-sm font-medium">ADRESA</h4>
          <ul className="flex-wrapfont-light mt-2 flex flex-col items-start font-light leading-6">
            <li className="text-background-light">Anemona Natura d.o.o.</li>
            <li className="text-background-light">M. J. Šporera 20</li>
            <li className="text-background-light">47 000 Karlovac, Hrvatska</li>
          </ul>
        </div>
      </div>
      <p className="absolute bottom-4 left-0 right-0 mx-auto text-center font-light lg:bottom-5">
        © {new Date().getFullYear()} Anemona Natura d.o.o.
      </p>
    </footer>
  )
}

export default Footer
