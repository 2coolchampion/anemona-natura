import React from "react"

const Footer = () => {
  return (
    <footer className="relative flex h-64 w-full flex-col justify-center bg-green-dark py-8 text-center text-xs text-white">
      <div className="flex h-fit justify-center">
        <div className="flex flex-col items-start border-r border-dashed px-9">
          <h4 className="text-sm font-medium">STRANICE</h4>
          <ul className="mt-2 flex flex-col flex-wrap items-start font-light leading-6">
            <li className="text-white">Naslovnica</li>
            <li className="text-white">Usluge</li>
            <li className="text-white">EU Projekti</li>
          </ul>
        </div>
        <div className="flex flex-col items-start px-9">
          <h4 className="text-sm font-medium">KONTAKT</h4>
          <ul className="mt-2 flex flex-col flex-wrap items-start font-light leading-6">
            <li className="text-white">VL. Sabrina Hribar</li>
            <li className="text-white">099 286 8118</li>
            <li className="text-white">anemona.natura.info@gmail.com</li>
          </ul>
        </div>
        <div className="flex flex-col items-start px-9">
          <h4 className="text-sm font-medium">ADRESA</h4>
          <ul className="flex-wrapfont-light mt-2 flex flex-col  items-start leading-6">
            <li className="text-white">Anomna NAture d.o.o.</li>
            <li className="text-white">M. J. Šporera 20</li>
            <li className="text-white">47 000 Karlovac, Hrvatska</li>
          </ul>
        </div>
      </div>
      <p className="absolute bottom-8 left-0 right-0 mx-auto text-center">
        © {new Date().getFullYear()} Anemora Natura d.o.o.
      </p>
    </footer>
  )
}

export default Footer
